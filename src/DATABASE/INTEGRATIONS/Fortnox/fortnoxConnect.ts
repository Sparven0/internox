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
    access_token: (response.data as { access_token: string }).access_token,
    refresh_token: (response.data as { refresh_token: string }).refresh_token,
  };
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
