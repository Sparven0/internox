import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';

import masterPool from './masterpool';
import { setupCompanySchema } from './schemaSetup';  // your full schema setup

export async function onboardCompany(name: string, domain: string): Promise<string> {
  const companyId = uuidv4();
  const dbName = `company_${companyId.replace(/-/g, '_')}`;

  // Insert company info into master DB
  await masterPool.query(
    'INSERT INTO companies (id, name, domain, db_name) VALUES ($1, $2, $3, $4)',
    [companyId, name, domain, dbName]
  );

  await masterPool.query(`CREATE DATABASE ${dbName}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await setupCompanySchema(dbName, companyId, name, domain);


  return companyId;
}
