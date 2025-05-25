import dotenv from 'dotenv';
dotenv.config();
import masterPool from '../masterpool';
import { getCompanyPool } from '../connectionManager';



async function initProcess() {
  console.log('Starting script...');
  try {
    console.log('Testing database connection...');
    const test = await masterPool.query('SELECT NOW()');
    console.log('Database connected:', test.rows[0]);
    console.log(process.env.POSTGRES_HOST, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, process.env.POSTGRES_DB, process.env.POSTGRES_PORT);
    const query = `
    SELECT * FROM companies
`;
    console.log('Executing query...');
    const result = await masterPool.query(query);
    result.rows.forEach(async (row) => {
        const res = await getCompanyPool(row.db_name).query(`
        SELECT * FROM company_integrations`);
        console.log(`Company: ${row.name}, Integrations:`, res.rows);
    })
    
    return result.rows;
  } catch (error) {
    console.error('Error:', error);
  } 
};

 initProcess()

export default initProcess;