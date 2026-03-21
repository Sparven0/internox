import { getCompanyPool } from '../../connectionManager';
import { extractCompany } from '../../COMPANIES/extractCompanyFunc'; // Ensure this path is correct
import { QueryResult } from 'pg';

/**
 * Extracts all IMAP credentials from a company's database.
 * @param company - Name of the company
 * @returns A promise that resolves to a QueryResult containing all IMAP credentials
 */
export async function extractImapCredentials(company: string): Promise<QueryResult> {
    // Get the company ID
    const companyId = (await extractCompany(company)).rows[0].id;

    // Construct dynamic database name
    const dbName = `company_${companyId.replace(/-/g, '_')}`;

    // Get the database pool for the company
    const companyPool = getCompanyPool(dbName);

    // Define the query to extract all rows from imap_credentials
    const query = `
        SELECT *
        FROM imap_credentials
    `;

    try {
        const result = await companyPool.query(query);
        return result;
    } catch (error) {
        console.error('Error extracting IMAP credentials:', error);
        throw error;
    }
}
