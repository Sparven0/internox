import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pools: Record<string, Pool> = {};

/**
 * Retrieves or creates a connection pool for the given company database name.
 * @param dbName - The name of the company's database
 * @returns A Pool connected to the company's database
 */
export  function getCompanyPool(dbName: string): Pool {
  if (!pools[dbName]) {
    pools[dbName] = new Pool({
      host: process.env.POSTGRES_HOST || 'localhost',
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: dbName, // Dynamic database name per company
      port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
    });
  }
  return pools[dbName];
}
