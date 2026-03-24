
import { getCompanyPool } from '../connectionManager';
import { extractCompany } from '../COMPANIES/extractCompanyFunc';
import { QueryResult } from 'pg';

/**
 * Extracts user information from the database based on the provided email.
 * @param company - Name of the company to which the user belongs
 * @param email - User's email address
 * @returns A promise that resolves to a QueryResult containing user information
 */



export async function extractUser(company: string): Promise<any[]> {
    const companyId = (await extractCompany(company)).rows[0].id;
    const dbName = `company_${companyId.replace(/-/g, '_')}`;
    const companyPool = getCompanyPool(dbName);

    try {
        const result = await companyPool.query(
            `SELECT id, email, role FROM users`
        );
        return result.rows;
    } catch (error) {
        console.error('Error extracting users:', error);
        throw error;
    }
}
