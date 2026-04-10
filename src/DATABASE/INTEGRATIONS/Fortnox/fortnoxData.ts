import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import masterPool from '../../masterpool';
import { getCompanyPool } from '../../connectionManager';
import { connectFortnox } from './fortnoxConnect';
import { updateTokens } from '../insertTokensFunc';

async function fetchFortnoxForCompany(companyId: string, endpoint: string): Promise<any> {
    // Get company db_name from master
    const companyResult = await masterPool.query(
        `SELECT * FROM companies WHERE id = $1`,
        [companyId]
    );

    if (companyResult.rows.length === 0) {
        throw new Error(`Company not found: ${companyId}`);
    }

    const company = companyResult.rows[0];
    const companyPool = getCompanyPool(company.db_name);

    // Get Fortnox token from company database
    const tokenResult = await companyPool.query(
    `SELECT * FROM company_integrations 
     WHERE TRIM(service) ILIKE 'fortnox' 
     ORDER BY expires_at DESC 
     LIMIT 1`
);

    if (tokenResult.rows.length === 0) {
        throw new Error(`No Fortnox integration found for company: ${companyId}`);
    }

    const accessToken = tokenResult.rows[0].access_token;
    const refreshToken = tokenResult.rows[0].refresh_token || '';

    // Call Fortnox API via shared connector; persist refreshed tokens when returned
    const data = await connectFortnox(accessToken, refreshToken, endpoint, async (newTokens) => {
        try {
            await updateTokens(companyId, 'Fortnox', { access_token: newTokens.access_token, refresh_token: newTokens.refresh_token });
        } catch (err) {
            console.warn('Failed to persist refreshed tokens for company', companyId, err);
        }
    });

    return data;
}

export default fetchFortnoxForCompany;
// ```

// Then test it with:
// ```
// GET http://localhost:1222/fortnox-data?companyId=<uuid>&endpoint=/companyinformation
// ```

// The `endpoint` defaults to `/customers` in the route if not provided, so you can also just hit:
// ```
// GET http://localhost:1222/fortnox-data?companyId=<uuid>