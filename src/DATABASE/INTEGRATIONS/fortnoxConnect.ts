import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const FORTNOX_TOKEN_URL = 'https://apps.fortnox.se/oauth-v1/token';
const FORTNOX_API_BASE = 'https://api.fortnox.se/3';

export async function connectFortnox(
  accessToken: string,
  refreshToken: string,
  endpoint: string // example: "/customers"
): Promise<any> {
  try {
    // 1. Try the API request with current token
    const response = await axios.get(`${FORTNOX_API_BASE}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'Client-Secret': process.env.FORTNOX_CLIENT_SECRET || '',
        'Access-Token': accessToken // Fortnox sometimes requires this as well
      }
    });

    return response.data;
  } catch (error: any) {
    // If token expired, try refreshing
    if (error.response?.status === 401) {
      console.log('Access token expired, refreshing...');
      const newTokens = await refreshFortnoxToken(refreshToken);

      // Retry with new access token
      const retryResponse = await axios.get(`${FORTNOX_API_BASE}${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${newTokens.access_token}`,
          'Accept': 'application/json',
          'Client-Secret': process.env.FORTNOX_CLIENT_SECRET || '',
          'Access-Token': newTokens.access_token
        }
      });

      return retryResponse.data;
    }

    console.error('Failed Fortnox API call:', error?.response?.data || error.message);
    throw error;
  }
}

async function refreshFortnoxToken(refreshToken: string): Promise<{ access_token: string; refresh_token: string }> {
  const credentials = Buffer.from(`${process.env.FORTNOX_CLIENT_ID}:${process.env.FORTNOX_CLIENT_SECRET}`).toString('base64');

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

  return {
    access_token: response.data.access_token,
    refresh_token: response.data.refresh_token,
  };
}



// example usage:

// const data = await connectFortnox(
//   'your_access_token_here',
//   'your_refresh_token_here',
//   '/customers'
// );

// console.log('Fortnox data:', data);
