import masterPool from '../masterpool';
import { getCompanyPool } from '../connectionManager';
import { extractCompany } from "../COMPANIES/extractCompanyFunc";

/**
 * Inserts tokens into the specified company's database.
 * @param companyName - The name of the company
 * @param tokens - An object containing token details (service, access_token, refresh_token, expires_at)
 * @returns A promise that resolves when the tokens are inserted
 */
export async function insertToken(
  companyName: string,
  tokens: { service: string; access_token: string; refresh_token?: string; expires_at?: string }
): Promise<void> {
  const companyInfo = await extractCompany(companyName);
  const companyId = companyInfo.rows[0].id;
  const dbName = `company_${companyId.replace(/-/g, '_')}`;
  const pool = getCompanyPool(dbName);
  const client = await pool.connect();

  const { service, access_token, refresh_token, expires_at } = tokens;

  const query = `
    INSERT INTO company_integrations (company_id, service, access_token, refresh_token, expires_at)
    VALUES ($1, $2, $3, $4, $5)
  `;

  const values = [companyId, service, access_token, refresh_token || null, expires_at || null];

  try {
    await client.query(query, values);
    console.log("Tokens inserted successfully");
  } catch (error) {
    console.error("Error inserting tokens:", error);
    throw error;
  } finally {
    client.release(); // Release the client back to the pool
  }
}

/**
 * Update tokens for an existing company integration row.
 * @param companyId - UUID of the company
 * @param service - name of the service (e.g., 'Fortnox')
 * @param tokens - object with access_token, refresh_token, expires_at
 */
export async function updateTokens(
  companyId: string,
  service: string,
  tokens: { access_token?: string; refresh_token?: string; expires_at?: string }
): Promise<void> {
  const dbRes = await masterPool.query('SELECT db_name FROM companies WHERE id = $1', [companyId]);
  if (dbRes.rows.length === 0) throw new Error('company not found');
  const companyDb = dbRes.rows[0].db_name;
  const pool = getCompanyPool(companyDb);

  const updates: string[] = [];
  const values: any[] = [];
  let idx = 1;
  if (tokens.access_token) {
    updates.push(`access_token = $${idx++}`);
    values.push(tokens.access_token);
  }
  if (tokens.refresh_token) {
    updates.push(`refresh_token = $${idx++}`);
    values.push(tokens.refresh_token);
  }
  if (tokens.expires_at) {
    updates.push(`expires_at = $${idx++}`);
    values.push(tokens.expires_at);
  }
  if (updates.length === 0) return;

  values.push(companyId, service);
  const sql = `UPDATE company_integrations SET ${updates.join(', ')} WHERE company_id = $${idx++} AND service = $${idx++}`;

  await pool.query(sql, values);
}

export default { insertToken, updateTokens };