import masterPool from '../masterpool';
import { QueryResult } from 'pg';

/**
 * Inserts a new company into the companies table.
 * @param name - Name of the company
 * @returns A promise that resolves to a QueryResult containing the inserted company's information
 */

 export async function extractCompany(name: string): Promise<QueryResult> {
    const query = `
        SELECT id, name, domain, created_at
        FROM companies
        WHERE name = $1
    `;

    const values = [name];

    try {
        const result = await masterPool.query(query, values);
        return result;
    } catch (error) {
        console.error('Error extracting company:', error);
        throw error;
    }}

  