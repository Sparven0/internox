import { getCompanyPool } from "../connectionManager";
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