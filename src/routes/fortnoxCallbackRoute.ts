import express, { Request, Response } from 'express';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import crypto from 'crypto';

const router = express.Router();

// Middleware to parse cookies
router.use(cookieParser());


router.get('/auth', (req: Request, res: Response) => {
  const state = crypto.randomBytes(16).toString('hex');
  res.cookie('oauthState', state, { httpOnly: true, secure: true, sameSite: 'strict' });
  res.redirect(`https://apps.fortnox.se/oauth-v1/auth?state=${state}&redirect_uri=http://localhost:1222/fortnox-callback`);
});
router.get('/callback', async (req: Request, res: Response): Promise<any> => {
  const { state, code } = req.query;
  const cookieState = req.cookies.oauthState; 

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
          Authorization: `Basic ${Buffer.from(`${process.env.FORTNOX_CLIENT_ID}:${process.env.FORTNOX_CLIENT_SECRET}`).toString('base64')}`,
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
      service: 'Fortnox',
      tokens: {
        access_token,
        refresh_token,
        expires_at,
      },
      customerId: 12345,
    });

    res.send('Fortnox successfully connected.');
  } catch (err: any) {
    console.error(err.response?.data || err.message || err);
    res.status(500).send('OAuth failed');
  }
});

export default router;