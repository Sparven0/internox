import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import masterPool from '../../masterpool';
import { getCompanyPool } from '../../connectionManager';

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

    // Call Fortnox API
    const response = await axios.get(
        `https://api.fortnox.se/3${endpoint}`,
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }
    );

    return response.data;
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