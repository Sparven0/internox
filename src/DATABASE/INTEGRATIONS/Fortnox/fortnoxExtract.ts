import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import masterPool from '../../masterpool';
import { getCompanyPool } from '../../connectionManager';

async function initProcess() {
    try {
        const query = `SELECT * FROM companies`;
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
                    const token = fortnoxResult.rows[0].access_token;
                    const fortnoxData = await fetchFortnoxCompanyData(token);
                    allIntegrationData.push({
                        company: company.name,
                        db: company.db_name,
                        fortnoxCompanyData: fortnoxData,
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

async function fetchFortnoxCompanyData(accessToken: string): Promise<any> {
    try {
        const response = await axios.get(
            'https://api.fortnox.se/3/companyinformation',
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
        );
        return response.data;
    } catch (error: any) {
        console.error('Error fetching Fortnox company data:', error.response?.data || error.message);
        throw error;
    }
}

export default initProcess;