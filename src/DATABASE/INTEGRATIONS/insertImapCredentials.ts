import { getCompanyPool } from '../connectionManager';
import { extractCompany } from '../COMPANIES/extractCompanyFunc';
import { hashPassword } from '../../utils/encryptPassword';
import { extractUserByEmail } from '../USERS/extractUserByEmailFunc';

export async function addImapCredentials(
  company: string,
  user: string,
  imapHost: string,
  imapPort: number,
  emailAddress: string,
  plainPassword: string
) {
    const userData = await extractUserByEmail(company, user);
    const userId = userData.id;  // ← was userData.rows[0].id
    const companyInfo = await extractCompany(company);
    const companyId = companyInfo.rows[0].id;
    const dbName = `company_${companyId.replace(/-/g, '_')}`;
    const pool = getCompanyPool(dbName);

    const encryptedPassword = await hashPassword(plainPassword);

    const result = await pool.query(
        `INSERT INTO imap_credentials (user_id, imap_host, imap_port, email_address, encrypted_password)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id`,
        [userId, imapHost, imapPort, emailAddress, encryptedPassword]
    );

    return result.rows[0];
}