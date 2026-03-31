import express, { Request, Response } from 'express';
import { authCompanyAdmin } from '../MIDDLEWARES/authCompanyAdmin';
import fetchFortnoxForCompany from '../DATABASE/INTEGRATIONS/Fortnox/fortnoxData';

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
 *     description: Fetches data from Fortnox for a specific company and endpoint.
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
    return res.status(200).json({ data });
  } catch (err: any) {
    console.error('fortnoxDataRoute error:', err?.response?.data || err.message || err);
    const status = err?.response?.status || 500;
    return res.status(status).json({ error: err?.message || 'Failed to fetch Fortnox data' });
  }
});

export default router;
