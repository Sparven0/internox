import masterPool from '../masterpool';
import { v4 as uuidv4 } from 'uuid';
import { QueryResult } from 'pg';


/**
 * Inserts a new company into the companies table.
 * @param name - Name of the company
 * @param domain - Domain of the company
 * @returns The inserted company's ID
 */
export const insertCompany = async (name: string, domain: string): Promise<string> => {
    const id = uuidv4();
    const query = 'INSERT INTO companies (id, name, domain) VALUES ($1, $2, $3) RETURNING id';
    const values = [id, name, domain];
    
    try {
        const result: QueryResult = await masterPool.query(query, values);
        return result.rows[0].id;
    } catch (error) {
        throw new Error(`Error inserting company: ${error}`);
    }
};
