import axios from 'axios';
import dotenv from 'dotenv';
import nock from 'nock';
import { getFortnoxTokens } from './fortnoxHub';

dotenv.config();



// GETS TOKENS 

async function getTokens(){
    try{
      const tokens = await getFortnoxTokens(); 
    tokens.forEach((token: { accessToken: any; }) => {
        const accessToken = token.accessToken;
        console.log('Access Token:', accessToken);
    })
    }
    catch (error) {
        console.error('Error fetching Fortnox tokens:', error);
        throw error;
    }
}

//  


const FORTNOX_TOKEN_URL = 'https://apps.fortnox.se/oauth-v1/token';
const FORTNOX_API_BASE = 'https://api.fortnox.se/3';

export type FortnoxTokens = {
  access_token: string;
  refresh_token?: string;
  expires_at?: string;
};

export async function refreshFortnoxToken(refreshToken: string): Promise<FortnoxTokens> {
  const tokenRes = await axios.post(
    'https://apps.fortnox.se/oauth-v1/token',
    new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
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
    refresh_token?: string;
    expires_in?: number;
  };

  const expires_at = expires_in ? new Date(Date.now() + expires_in * 1000).toISOString() : undefined;

  return {
    access_token,
    refresh_token,
    expires_at,
  };
}

/**
 * Connect to Fortnox API with supplied access token. On 401 it will attempt
 * to refresh using the refreshToken and, if successful, call onRefresh with
 * the new tokens and retry the original request once.
 */
export async function connectFortnox(
  accessToken: string,
  refreshToken: string | undefined,
  endpoint: string,
  onRefresh?: (tokens: FortnoxTokens) => Promise<void>
): Promise<any> {
  const url = endpoint.startsWith('/3') || endpoint.startsWith('http') ? endpoint : `https://api.fortnox.se/3${endpoint}`;

  const makeRequest = async (token: string) => {
    const res = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  try {
    return await makeRequest(accessToken);
  } catch (err: any) {
    // If unauthorized and we have a refresh token, try to refresh once
    if (err?.response?.status === 401 && refreshToken) {
      try {
        const newTokens = await refreshFortnoxToken(refreshToken);
        // Persist refreshed tokens if caller provided a callback
        if (onRefresh) {
          try {
            await onRefresh(newTokens);
          } catch (persistErr) {
            // Don't block the request retry on persistence errors; just warn
            console.warn('onRefresh persistence failed:', persistErr);
          }
        }

        // Retry original request with new access token
        return await makeRequest(newTokens.access_token);
      } catch (refreshErr) {
        // Refresh failed, surface the original or refresh error
        throw refreshErr;
      }
    }

    // not a 401 or no refresh token; rethrow
    throw err;
  }
}

interface FortnoxTokenResponse {
  access_token?: string;
  refresh_token?: string;
  expires_at?: string;
  expires_in?: number | string;
}

async function refreshFortnoxTokenOld(refreshToken: string): Promise<{ access_token?: string; refresh_token?: string; expires_at?: string }> {
  const credentials = Buffer.from(`${process.env.FORTNOX_CLIENT_ID}:${process.env.FORTNOX_CLIENT_SECRET}`).toString('base64');

  try {
    const response = await axios.post(
      FORTNOX_TOKEN_URL,
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
      {
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

  const respData = response.data as FortnoxTokenResponse;
  const access_token = respData.access_token;
  const refresh_token = respData.refresh_token;

    // Map expires; prefer explicit expires_at, otherwise compute from expires_in if present
    let expires_at: string | undefined = undefined;
    if (respData.expires_at) {
      expires_at = respData.expires_at;
    } else if (respData.expires_in) {
      const expiresIn = Number(respData.expires_in);
      if (!Number.isNaN(expiresIn)) {
        expires_at = new Date(Date.now() + expiresIn * 1000).toISOString();
      }
    }

    return { access_token, refresh_token, expires_at };
  } catch (err: any) {
    console.error('Failed to refresh Fortnox token:', err?.response?.data || err.message || err);
    throw err;
  }
}

export async function getFortnoxData() {
    try{
    const tokens = await getFortnoxTokens();
    const accessToken = tokens[0].access_token; 
    const refreshToken = tokens[0].refresh_token || '';
    const endpoint = '/customers'; // Example endpoint, change as needed
    const data = await connectFortnox(accessToken, refreshToken, endpoint);
    return data;
    }
    catch (error) {
        console.error('Error fetching Fortnox data:', error);
        throw error;
}
}


// example usage:

// const data = await connectFortnox(
//   'your_access_token_here',
//   'your_refresh_token_here',
//   '/customers'
// );

// console.log('Fortnox data:', data);
