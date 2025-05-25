import masterPool from '../masterpool';
import { getCompanyPool } from '../connectionManager';

/**
 * Looks up the company's DB by domain, then returns its pool.
 * Throws if the company is not found.
 */
export async function getCompanyPoolByDomain(domain: string) {
  const result = await masterPool.query(
    'SELECT db_name FROM companies WHERE domain = $1',
    [domain]
  );

  if (result.rowCount === 0) {
    throw new Error(`No company found for domain: ${domain}`);
  }

  const dbName = result.rows[0].db_name;
  return getCompanyPool(dbName);
}
