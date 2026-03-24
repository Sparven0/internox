import dotenv from 'dotenv';
dotenv.config();

import masterPool from '../../masterpool';
import { getCompanyPool } from '../../connectionManager';
import { connectFortnox } from './fortnoxConnect';

/**
 * Fetch Fortnox data for a single company by companyId.
 * Looks up the company's DB, finds the Fortnox integration tokens, and calls Fortnox API.
 * @param companyId - the company id stored in master `companies.id`
 * @param endpoint - Fortnox API endpoint (e.g. '/customers')
 */
export async function fetchFortnoxForCompany(companyId: string, endpoint: string): Promise<any> {
  try {
    // Debug: confirm which database this connection is using and which tables are visible
    try {
      const cur = await masterPool.query("SELECT current_database() AS db");
      console.log('masterPool current_database():', cur.rows[0]?.db);
      const tables = await masterPool.query("SELECT tablename FROM pg_tables WHERE schemaname='public'");
      console.log('masterPool public tables:', tables.rows.map((r: any) => r.tablename));
    } catch (dbgErr) {
      console.error('Error checking masterPool database/tables:', dbgErr);
    }

    const companyRes = await masterPool.query('SELECT db_name FROM companies WHERE id = $1', [companyId]);
    if (companyRes.rowCount === 0) {
      throw new Error(`Company with id ${companyId} not found`);
    }

    const dbName = companyRes.rows[0].db_name as string;
    console.log(`Using database: ${dbName}`);
    const companyPool = getCompanyPool(dbName);

    const fortnoxQuery = `SELECT * FROM company_integrations WHERE TRIM(service) ILIKE 'fortnox' AND company_id = $1`;
    const fortRes = await companyPool.query(fortnoxQuery, [companyId]);
    if (fortRes.rows.length === 0) {
      throw new Error(`No Fortnox integration found for company ${companyId}`);
    }

    const { access_token, refresh_token } = fortRes.rows[0];

    return await connectFortnox(access_token, refresh_token || '', endpoint);
  } catch (error) {
    console.error('fetchFortnoxForCompany error:', error);
    throw error;
  }
}

export default fetchFortnoxForCompany;

// Example usage:
// (async () => {
//   const data = await fetchFortnoxForCompany('your-company-id', '/customers');
//   console.log('Fortnox data:', data);
// })();
