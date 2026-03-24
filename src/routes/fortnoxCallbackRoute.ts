import express, { Request, Response } from 'express';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware to parse cookies
router.use(cookieParser());


// router.get('/auth', (req: Request, res: Response) => {
//  const state = crypto.randomBytes(16).toString('hex');

//   res.cookie('oauthState', state, { httpOnly: true, secure: true, sameSite: 'none', domain: '.duckdns.org' });
//   res.redirect(`https://apps.fortnox.se/oauth-v1/auth?client_id=UZNsMVYcAGyy&state=${state}&redirect_uri=https://internox.duckdns.org/fortnox-callback&response_type=code&scope=customer%20invoice`);
// });
// router.get('/fortnox-callback', async (req: Request, res: Response): Promise<any> => {
//   const { state, code } = req.query;
//   const cookieState = req.cookies.oauthState; 
// console.log(cookieState, state)
//   if (!state || state !== cookieState) {
//     return res.status(400).send('Invalid state');
//   }
//   res.clearCookie('oauthState');
//   if (!code) {
//     return res.status(400).send('Missing authorization code');
//   }

//   try {
//     const tokenRes = await axios.post(
//       'https://apps.fortnox.se/oauth-v1/token',
//       new URLSearchParams({
//         grant_type: 'authorization_code',
//         code: code as string,
//         redirect_uri: "http://localhost:1222/fortnox-callback",
//         // redirect_uri: 'https://internox.duckdns.org/fortnox-callback',
//       }),
//       {
//         headers: {
//           Authorization: `Basic ${Buffer.from(`${process.env.FORTNOX_CLIENT_ID}:${process.env.FORTNOX_CLIENT_SECRET}`).toString('base64')}`,
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       }
//     );

//     const { access_token, refresh_token, expires_in } = tokenRes.data as {
//       access_token: string;
//       refresh_token: string;
//       expires_in: number;
//     };

//     const expires_at = new Date(Date.now() + expires_in * 1000);
//     await axios.post('https://internox.duckdns.org/new-credentials', {
//       service: 'Fortnox',
//       tokens: {
//         access_token,
//         refresh_token,
//         expires_at,
//       },
//       customerId: 12345,
//     });

//     res.send('Fortnox successfully connected.');
//   } catch (err: any) {
//   console.error('Fortnox token error:', {
//     message: err.message,
//     stack: err.stack,
//     responseData: err.response?.data,
//     responseStatus: err.response?.status,
//     requestData: err.config?.data,
//     requestHeaders: err.config?.headers,
//   });
//   res.status(500).send('OAuth failed');
// }

// });

// export default router;


// /auth route - fix cookie and redirect_uri
router.get('/auth', (req: Request, res: Response) => {
  const state = crypto.randomBytes(16).toString('hex');

  res.cookie('oauthState', state, {
    httpOnly: true,
    secure: false,          // ← was true; localhost is HTTP
    sameSite: 'lax',        // ← was 'none'; 'none' requires secure:true
    // domain removed       // ← was '.duckdns.org'; omit so it defaults to localhost
  });

  res.redirect(
    `https://apps.fortnox.se/oauth-v1/auth?client_id=UZNsMVYcAGyy&state=${state}` +
    `&redirect_uri=http://localhost:1222/fortnox-callback` + // ← was internox.duckdns.org
      `&response_type=code&scope=companyinformation%20invoice%20customer`
  );
});

// /fortnox-callback route - fix token redirect_uri and credentials endpoint
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
        redirect_uri: 'http://localhost:1222/fortnox-callback', // ← uncommented, duckdns line removed
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

    const { service, access_token, refresh_token, expires_in } = tokenRes.data as {
      service: string
      access_token: string;
      refresh_token: string;
      expires_in: number;
    };

    const expires_at = new Date(Date.now() + expires_in * 1000);

    const internalBase = process.env.INTERNAL_BASE_URL || 'http://localhost:1222';

    // Sign a short-lived admin JWT so the internal endpoint passes authCompanyAdmin
    const adminJwtSecret = process.env.JWT_SECRET || 'dev-internal-secret';
    const adminToken = jwt.sign({ role: 'admin' }, adminJwtSecret, { expiresIn: '1h' });

    await axios.post(
      `${internalBase}/new-credentials`,
      { companyName: 'Company1', tokens: { service: 'Fortnox', access_token, refresh_token, expires_at } },
      { headers: { Authorization: `Bearer ${adminToken}` } }
    );

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