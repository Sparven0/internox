import { getCompanyPoolByDomain } from '../COMPANIES/getCompanyPoolByDomain'; 
import masterPool from '../masterpool';
import { getCompanyPool } from '../connectionManager';


export async function createUser(email: string, companyDomain: string) {
  // Step 1: Resolve company DB name from master DB
  const result = await masterPool.query(
    'SELECT id, db_name FROM companies WHERE domain = $1',
    [companyDomain]
  );

  if (result.rowCount === 0) {
    throw new Error('Company not found');
  }

  const { id: companyId, db_name: dbName } = result.rows[0];
  if (!email.endsWith('@' + companyDomain)) {
    throw new Error('Company domain does not match email domain');
  }
  const companyPool = getCompanyPool(dbName);


  await companyPool.query(
    `INSERT INTO users (email, company_id, role) VALUES ($1, $2, $3)`,
    [email, companyId, 'employee']
  );
}
