import { hashPassword } from '../../utils/encryptPassword';
import masterPool from '../masterpool';
import { getCompanyPool } from '../connectionManager';


export async function createUser(email: string, companyDomain: string, password:string) {
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
  const encryptedPassword =  await hashPassword(password);
console.log(encryptedPassword)

  await companyPool.query(
    `INSERT INTO users (email, company_id, password, role) VALUES ($1, $2, $3, $4)`,
    [email, companyId, encryptedPassword, 'employee']
  );
}
