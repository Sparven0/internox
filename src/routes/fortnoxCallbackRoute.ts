import { Request, Response, Router } from 'express';
import axios from 'axios';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { insertToken } from '../DATABASE/INTEGRATIONS/insertTokensFunc';

const router = Router();

router.get('/auth', (req: Request, res: Response) => {
  const state = crypto.randomBytes(16).toString('hex');
  const token = req.query.token as string;  // ← passed from frontend

  res.cookie('oauthState', state, { httpOnly: true, secure: false, sameSite: 'lax' });
  res.cookie('oauthToken', token, { httpOnly: true, secure: false, sameSite: 'lax' });  // ← store it

  res.redirect(
    `https://apps.fortnox.se/oauth-v1/auth?client_id=UZNsMVYcAGyy&state=${state}` +
    `&redirect_uri=http://localhost:1222/fortnox-callback` +
    `&response_type=code&scope=companyinformation%20invoice%20customer`
  );
});

/**
 * @openapi
 * /fortnox-callback:
 *   get:
 *     summary: Fortnox OAuth callback
 *     description: |
 *       ## Endpoint details
 *
 *       This endpoint works as following:
 *       - User signs in and retrieves their JWT
 *       - User passes their JWT in the OAuth URL as shown below
 *       - http://localhost:1222/auth?token=<JWT from login>
 *
 *     parameters:
 *       - in: query
 *         name: state
 *         schema:
 *           type: string
 *         required: true
 *         description: OAuth state parameter.
 *       - in: query
 *         name: code
 *         schema:
 *           type: string
 *         required: true
 *         description: Authorization code from Fortnox.
 *     responses:
 *       200:
 *         description: Callback handled successfully.
 *       400:
 *         description: Invalid state or missing authorization code.
 */

router.get('/fortnox-callback', async (req: Request, res: Response): Promise<any> => {
  const { state, code } = req.query;
  const cookieState = req.cookies.oauthState;
   const oauthToken = req.cookies.oauthToken;

  if (!state || state !== cookieState) {
    return res.status(400).send('Invalid state');
  }
  res.clearCookie('oauthState');
const decoded = jwt.verify(oauthToken, process.env.JWT_SECRET!) as any;
  const companyName = decoded.companyName;
  if (!code) {
    return res.status(400).send('Missing authorization code');
  }

  try {
    const tokenRes = await axios.post(
      'https://apps.fortnox.se/oauth-v1/token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code as string,
        redirect_uri: 'http://localhost:1222/fortnox-callback',
      }),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.FORTNOX_CLIENT_ID}:${process.env.FORTNOX_CLIENT_SECRET}`
          ).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const { access_token, refresh_token, expires_in } = tokenRes.data as {
      access_token: string;
      refresh_token: string;
      expires_in: number;
    };

    const expires_at = new Date(Date.now() + expires_in * 1000);

    await insertToken(companyName, {
      service: 'Fortnox',
      access_token,
      refresh_token,
      expires_at: expires_at.toISOString(),
    });

    res.send(`<!DOCTYPE html>
<html>
<head>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #0a0a0a; font-family: 'DM Sans', sans-serif; }
  .card { text-align: center; padding: 64px 80px; animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
  .icon-wrap { width: 72px; height: 72px; border-radius: 50%; background: #00c06b12; border: 1px solid #00c06b40; display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; animation: pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }
  .checkmark { width: 28px; height: 28px; stroke: #00c06b; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; fill: none; }
  .checkmark path { stroke-dasharray: 50; stroke-dashoffset: 50; animation: draw 0.4s ease 0.6s forwards; }
  .label { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #00c06b; font-weight: 400; margin-bottom: 16px; animation: fadeUp 0.6s ease 0.4s both; }
  h1 { font-family: 'DM Serif Display', serif; font-size: 36px; color: #f5f5f0; font-weight: 400; line-height: 1.15; margin-bottom: 16px; animation: fadeUp 0.6s ease 0.5s both; }
  p { font-size: 14px; color: #555; font-weight: 300; animation: fadeUp 0.6s ease 0.6s both; }
  .divider { width: 1px; height: 40px; background: linear-gradient(to bottom, transparent, #222, transparent); margin: 32px auto; animation: fadeUp 0.6s ease 0.7s both; }
  .meta { font-size: 12px; color: #333; font-weight: 300; animation: fadeUp 0.6s ease 0.8s both; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pop { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: scale(1); } }
  @keyframes draw { to { stroke-dashoffset: 0; } }
</style>
</head>
<body>
  <div class="card">
    <div class="icon-wrap">
      <svg class="checkmark" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
    </div>
    <div class="label">Integration complete</div>
    <h1>Fortnox connected<br>successfully.</h1>
    <p>You may close this window.</p>
    <div class="divider"></div>
    <div class="meta">Powered by Internox</div>
  </div>
</body>
</html>`);
  } catch (err: any) {
    console.error('Fortnox token error:', {
      message: err.message,
      stack: err.stack,
      responseData: err.response?.data,
      responseStatus: err.response?.status,
      requestData: err.config?.data,
      requestHeaders: err.config?.headers,
    });
    res.status(500).send('OAuth failed');
  }
});

export default router;