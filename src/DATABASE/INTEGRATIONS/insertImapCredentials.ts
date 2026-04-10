import { getCompanyPool } from '../connectionManager';
import { extractCompany } from '../COMPANIES/extractCompanyFunc';
import { hashPassword, encryptPassword } from '../../utils/encryptPassword';
import { extractUserByEmail } from '../USERS/extractUserByEmailFunc';

export async function addImapCredentials(
  company: string,
  user: string,
  imapHost: string,
  imapPort: number,
  emailAddress: string,
  plainPassword: string
) {
    // resolve user
    const userData = await extractUserByEmail(company, user);
    let userId: string | undefined;
    if (userData && (userData as any).rows && (userData as any).rows.length) {
      userId = (userData as any).rows[0].id;
    } else if ((userData as any).id) {
      userId = (userData as any).id;
    }
    if (!userId) throw new Error(`User not found: ${user}`);

    // resolve company and db name
    const companyInfo = await extractCompany(company);
    let companyId: string | undefined;
    let dbName: string | undefined;
    if (companyInfo && (companyInfo as any).rows && (companyInfo as any).rows.length) {
      const row = (companyInfo as any).rows[0];
      companyId = row.id;
      dbName = row.db_name || `company_${String(row.id).replace(/-/g, '_')}`;
    } else if ((companyInfo as any).id) {
      const info = (companyInfo as any);
      companyId = info.id;
      dbName = info.db_name || `company_${String(info.id).replace(/-/g, '_')}`;
    }
    if (!companyId || !dbName) throw new Error(`Company not found: ${company}`);

    const pool = getCompanyPool(dbName);

    // store an encrypted IMAP password (symmetric)
    const encryptedPassword = encryptPassword(plainPassword);

    const result = await pool.query(
        `INSERT INTO imap_credentials (user_id, imap_host, imap_port, email_address, encrypted_password)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id`,
        [userId, imapHost, imapPort, emailAddress, encryptedPassword]
    );

    return result.rows[0];
}