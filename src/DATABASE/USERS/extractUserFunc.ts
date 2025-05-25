
import { getCompanyPool } from '../connectionManager';
import { extractCompany } from '../COMPANIES/extractCompanyFunc';
import { QueryResult } from 'pg';

/**
 * Extracts user information from the database based on the provided email.
 * @param company - Name of the company to which the user belongs
 * @param email - User's email address
 * @returns A promise that resolves to a QueryResult containing user information
 */

export async function extractUser(company: string, email: string): Promise<QueryResult> {
    const companyId = (await extractCompany(company)).rows[0].id;
    const dbName = `company_${companyId.replace(/-/g, '_')}`;

    const companyPool = getCompanyPool(dbName);

    const query = `
        SELECT id, email, company_id, role, created_at
        FROM users
        WHERE email = $1
    `;

    const values = [email]; // Corrected values array

    try {
        const result = await companyPool.query(query, values);
        return result;
    } catch (error) {
        console.error('Error extracting user:', error);
        throw error;
    }
}
