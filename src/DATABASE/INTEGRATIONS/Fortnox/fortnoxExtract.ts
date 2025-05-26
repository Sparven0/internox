import dotenv from 'dotenv';
dotenv.config();
import masterPool from '../../masterpool';
import { getCompanyPool } from '../../connectionManager';

async function initProcess() {
    console.log('Starting script...');
    try {
        console.log('Testing database connection...'); 
        console.log(process.env.POSTGRES_HOST, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, process.env.POSTGRES_DB, process.env.POSTGRES_PORT);
        const query = `
        SELECT * FROM companies
`;
        console.log('Executing query...');
        const result = await masterPool.query(query);
        const allIntegrationData: any[] = [];

        for (const company of result.rows) {
            try {
                const companyPool = getCompanyPool(company.db_name);
                const fortnoxQuery = `
                SELECT * FROM company_integrations
                WHERE TRIM(service) ILIKE 'fortnox'
            `;
                const fortnoxResult = await companyPool.query(fortnoxQuery);
                if (fortnoxResult.rows.length > 0) {
                    allIntegrationData.push({
                        company: company.name,
                        db: company.db_name,
                        integrations: fortnoxResult.rows,
                    });
                }
            } catch (err) {
                console.error(`Failed to process ${company.db_name}:`, err);
            }
        }
        return allIntegrationData;

    } catch (error) {
        console.error('Error in initProcess:', error);
        throw error;
    }
}




export default initProcess;