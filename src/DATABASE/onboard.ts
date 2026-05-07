import { v4 as uuidv4 } from 'uuid';

import masterPool from './masterpool';
import { getCompanyPool } from './connectionManager';

export async function onboardCompany(name: string, domain: string): Promise<string> {
  const companyId = uuidv4();
  const dbName = `company_${companyId.replace(/-/g, '_')}`;

  // Insert company info into master DB
  await masterPool.query(
    'INSERT INTO companies (id, name, domain, db_name) VALUES ($1, $2, $3, $4)',
    [companyId, name, domain, dbName]
  );

  // Clone company_dev (fully migrated template) — no migrate deploy needed
  await masterPool.query(`CREATE DATABASE "${dbName}" TEMPLATE company_dev`);

  // Seed the company record into the new company DB (required for FK constraints on users etc.)
  const pool = getCompanyPool(dbName);
  await pool.query(
    'INSERT INTO companies (id, name, domain) VALUES ($1, $2, $3)',
    [companyId, name, domain]
  );

  return companyId;
}
