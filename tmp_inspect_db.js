const { Pool } = require('pg');
require('dotenv').config();
(async () => {
  try {
    const masterPool = new Pool({
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
    });

    const res = await masterPool.query('SELECT id, name, db_name FROM companies');
    console.log('companies:', res.rows);

    if (res.rows.length > 0) {
      const dbName = res.rows[0].db_name;
      const companyPool = new Pool({
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: dbName,
        port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
      });

      const ci = await companyPool.query("SELECT id, service, access_token IS NOT NULL AS has_access, length(coalesce(refresh_token,'')) AS refresh_len, expires_at FROM company_integrations;");
      console.log('company_integrations:', ci.rows);

      await companyPool.end();
    }

    await masterPool.end();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
