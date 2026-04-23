import express, { Request, Response } from 'express';
import { authCompanyAdmin } from '../MIDDLEWARES/authCompanyAdmin';
import fetchFortnoxForCompany from '../DATABASE/INTEGRATIONS/Fortnox/fortnoxData';
import masterPool from '../DATABASE/masterpool';
import { getCompanyPool } from '../DATABASE/connectionManager';

const router = express.Router();

/**
 * GET /fortnox-data?companyId=<id>&endpoint=<endpoint>
 * Protected by authCompanyAdmin middleware (expects Bearer token with role 'admin')
 */
/**
 * @openapi
 * /fortnox-data:
 *   get:
 *     summary: Fetch Fortnox data
 *     description: Fetches data from Fortnox for a specific company and endpoint.**TODO** Need to set up logic for the refreshtoken to automatically refresh the auth, as of now, it expires and requires user to execute OAuth flow again.
 *     parameters:
 *       - in: query
 *         name: companyId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the company.
 *       - in: query
 *         name: endpoint
 *         schema:
 *           type: string
 *         required: false
 *         description: Fortnox API endpoint to fetch data from.
 *     responses:
 *       200:
 *         description: Data fetched successfully.
 *       400:
 *         description: Missing companyId parameter.
 *       500:
 *         description: Failed to fetch Fortnox data.
 */
router.get('/', authCompanyAdmin, async (req: Request, res: Response) => {
  const companyId = (req.query.companyId as string) || (req.query.id as string);
  const endpoint = (req.query.endpoint as string) || '/customers';

  if (!companyId) {
    return res.status(400).json({ message: 'companyId query parameter is required' });
  }

  try {
    const data = await fetchFortnoxForCompany(companyId, endpoint);
    if (endpoint === '/customers') {
      const result = data.Customers.map((c: any) => ({
        name: c.Name,
        email: c.Email
      }));

      // Insert each customer, skip if email already exists
      for (const customer of result) {
        if (!customer.email) continue; // skip if no email from Fortnox

        // Resolve company DB and use its pool
        const masterRes = await masterPool.query('SELECT db_name, name FROM companies WHERE id = $1', [companyId]);
        if (masterRes.rows.length === 0) continue; // skip if company missing
        const companyDb = String(masterRes.rows[0].db_name).replace(/-/g, '_');
        const companyName = masterRes.rows[0].name;
        const pool = getCompanyPool(companyDb);

        // 1. Upsert customer into customers table (do nothing if email exists)
        const insertCustomer = await pool.query(
          `INSERT INTO customers (name, email, company_id)
           VALUES ($1, $2, $3)
           ON CONFLICT (email) DO NOTHING
           RETURNING id`,
          [customer.name, customer.email, companyId]
        );

        // If DO NOTHING triggered, fetch the existing customer id
        const customerId = insertCustomer.rows[0]?.id
          ?? (await pool.query('SELECT id FROM customers WHERE email = $1', [customer.email])).rows[0]?.id;

        // 2. Link customer to company in junction table (skip if already linked)
        await pool.query(
          `INSERT INTO employee_customer (customer_id, company_id)
           VALUES ($1, $2)
           ON CONFLICT DO NOTHING`,
          [customerId, companyId]
        );
      }

      return res.status(200).json({ customers: result });
    }
    return res.status(200).json({ data });
  } catch (err: any) {
    console.error('fortnoxDataRoute error:', err?.response?.data || err.message || err);
    const status = err?.response?.status || 500;
    return res.status(status).json({ error: err?.message || 'Failed to fetch Fortnox data' });
  }
});

export default router;
