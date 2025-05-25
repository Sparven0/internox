import { getCompanyPool } from './connectionManager';

export async function setupCompanySchema(dbName: string, companyId: string, name: string, domain: string) {
  const pool = getCompanyPool(dbName);

  const schemaSQL = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";

    CREATE TABLE companies (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      domain TEXT NOT NULL UNIQUE,
      created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now()
    );

    CREATE TABLE users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      company_id UUID NOT NULL,
      role TEXT NOT NULL DEFAULT 'employee',
      created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
      CONSTRAINT fk_company FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
    );

    CREATE TABLE company_integrations (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      company_id UUID NOT NULL,
      service TEXT,
      access_token TEXT NOT NULL,
      refresh_token TEXT,
      expires_at TIMESTAMP WITHOUT TIME ZONE,
      created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
      CONSTRAINT fk_company_integrations FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
    );

    CREATE TABLE imap_credentials (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID,
      imap_host TEXT NOT NULL,
      imap_port INTEGER NOT NULL DEFAULT 993,
      email_address TEXT NOT NULL,
      encrypted_password TEXT NOT NULL,
      created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
      CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `;

  await pool.query(schemaSQL);

  await pool.query(
    `INSERT INTO companies (id, name, domain) VALUES ($1, $2, $3)`,
    [companyId, name, domain]
  );

  // Don't close pool here — keep it open if you'll reuse
}
