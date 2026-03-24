import { getCompanyPool } from '../connectionManager';
import { extractCompany } from '../COMPANIES/extractCompanyFunc';

export async function extractUserByEmail(company: string, email: string): Promise<any> {
    const companyId = (await extractCompany(company)).rows[0].id;
    const dbName = `company_${companyId.replace(/-/g, '_')}`;
    const companyPool = getCompanyPool(dbName);

    try {
        const result = await companyPool.query(
            `SELECT id, email, role FROM users WHERE email = $1`,
            [email]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error extracting user by email:', error);
        throw error;
    }
}