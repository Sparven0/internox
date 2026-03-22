import express, { Request, Response } from 'express';
import axios from 'axios';
import crypto from 'crypto';
import cookieParser from 'cookie-parser';

const router = express.Router();
router.use(cookieParser());

// ENV
const CLIENT_ID = process.env.FORTNOX_CLIENT_ID!;
const CLIENT_SECRET = process.env.FORTNOX_CLIENT_SECRET!;
const REDIRECT_URI = process.env.FORTNOX_REDIRECT_URI!;

// ---------------- UTIL ----------------
function base64(str: string) {
  return Buffer.from(str).toString('base64');
}

function generateState() {
  return crypto.randomBytes(16).toString('hex');
}

// ---------------- STEP 1: CONNECT ----------------
router.get('/auth', (req: Request, res: Response) => {
  const state = generateState();

  // Store state in secure cookie (production-safe)
  res.cookie('oauth_state', state, {
    httpOnly: true,
    secure: true,        // MUST be HTTPS in production
    sameSite: 'none',    // required for cross-site OAuth
    domain: '.duckdns.org',
    maxAge: 10 * 60 * 1000 // 10 min
  });

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'companyinformation invoices customers',
    state,
    access_type: 'offline'
  });

  res.redirect(`https://apps.fortnox.se/oauth-v1/auth?${params}`);
});

// ---------------- STEP 2: CALLBACK ----------------
router.get('/callback', async (req: Request, res: Response): Promise<void> => {
  const { code, state, error, error_description } = req.query;
  const cookieState = req.cookies.oauth_state;

  // Handle OAuth error
  if (error) {
    console.error('OAuth error:', error, error_description);
     res.status(400).send(`OAuth error: ${error}`);
  }

  // Validate state
  if (!state || state !== cookieState) {
    console.error('Invalid state:', { state, cookieState });
     res.status(400).send('Invalid state');
  }

  res.clearCookie('oauth_state');

  if (!code) {
     res.status(400).send('Missing authorization code');
  }

  try {
    // 🔥 Exchange code → tokens
    const tokenResponse = await axios.post(
      'https://apps.fortnox.se/oauth-v1/token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code as string,
        redirect_uri: REDIRECT_URI
      }).toString(),
      {
        headers: {
          Authorization: `Basic ${base64(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const tokens = tokenResponse.data as { access_token: string; refresh_token: string; expires_in: number };

    const enrichedTokens = {
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      expires_at: Date.now() + tokens.expires_in * 1000
    };

    // ✅ Store tokens in your backend (DB or API)
    await axios.post('https://internox.duckdns.org/new-credentials', {
      service: 'Fortnox',
      tokens: enrichedTokens,
      customerId: 12345 // TODO: replace with real user ID
    });

    res.send('Fortnox connected successfully 🎉');

  } catch (err: any) {
    console.error('Token exchange failed:', {
      message: err.message,
      response: err.response?.data
    });

    res.status(500).send(
      'Token exchange failed: ' +
      (err.response?.data?.error_description || err.message)
    );
  }
});

// ---------------- TOKEN REFRESH ----------------
export async function refreshFortnoxToken(refresh_token: string) {
  const response = await axios.post(
    'https://apps.fortnox.se/oauth-v1/token',
    new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    }).toString(),
    {
      headers: {
        Authorization: `Basic ${base64(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );

  const tokens = response.data as { access_token: string; refresh_token: string; expires_in: number };

  return {
    access_token: tokens.access_token,
    refresh_token: tokens.refresh_token,
    expires_at: Date.now() + tokens.expires_in * 1000
  };
}

// ---------------- API HELPER ----------------
export async function callFortnoxAPI(accessToken: string, endpoint: string) {
  const response = await axios.get(
    `https://api.fortnox.se/3/${endpoint}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Client-Secret': CLIENT_SECRET,
        Accept: 'application/json'
      }
    }
  );

  return response.data;
}

export default router;