import { Request, Response, Router } from 'express';
import axios from 'axios';
import crypto from 'crypto';

const router = Router();

router.get('/auth', (req: Request, res: Response) => {
  const state = crypto.randomBytes(16).toString('hex');

  res.cookie('oauthState', state, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
  });

  res.redirect(
    `https://apps.fortnox.se/oauth-v1/auth?client_id=UZNsMVYcAGyy&state=${state}` +
    `&redirect_uri=http://localhost:1222/fortnox-callback` +
    `&response_type=code&scope=companyinformation%20invoice%20customer`
  );
});

router.get('/fortnox-callback', async (req: Request, res: Response): Promise<any> => {
  const { state, code } = req.query;
  const cookieState = req.cookies.oauthState;
  console.log(cookieState, state);

  if (!state || state !== cookieState) {
    return res.status(400).send('Invalid state');
  }
  res.clearCookie('oauthState');

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

    await axios.post('http://localhost:1222/new-credentials', {
      companyName: 'Company1',
      tokens: {
        service: 'Fortnox',
        access_token,
        refresh_token,
        expires_at,
      },
    });

    res.send('Fortnox successfully connected.');
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