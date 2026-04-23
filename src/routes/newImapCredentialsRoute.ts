import express from "express";
import { addImapCredentials } from "../DATABASE/INTEGRATIONS/insertImapCredentials";
import { authCompanyAdmin } from '../MIDDLEWARES/authCompanyAdmin';
import masterPool from "../DATABASE/masterpool";
import { getCompanyPool } from "../DATABASE/connectionManager";

const router = express.Router();

/**
 * @openapi
 * /new-imap-credentials:
 *   post:
 *     summary: Add new IMAP credentials
 *     description: Adds new IMAP credentials for a company.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               companyDomain:
 *                 type: string
 *                 example: "Company1"
 *               userEmail:
 *                 type: string
 *                 example: "fynnxav@gmail.com"
 *               imap_host:
 *                 type: string
 *                 example: "imap.gmail.com"
 *               imap_port:
 *                 type: integer
 *                 example: 993
 *               email_address:
 *                 type: string
 *                 example: "fynnxav@gmail.com"
 *               password:
 *                 type: string
 *                 example: "your16charapppassword"
 *     responses:
 *       201:
 *         description: IMAP credentials added successfully.
 *       400:
 *         description: Missing required fields or user/company not found.
 *       500:
 *         description: Error adding IMAP credentials.
 */

router.post('/', authCompanyAdmin, async (req, res) => {
  const { companyDomain, userEmail, imap_host, imap_port, email_address, password } = req.body;

  if (!companyDomain || !userEmail || !imap_host || !email_address || !password) {
    return res.status(400).json({
      error: 'companyDomain, userEmail, imap_host, email_address and password are required'
    });
  }

  try {
    const result = await addImapCredentials(
      companyDomain,  // addImapCredentials resolves this internally
      userEmail,      // addImapCredentials resolves this internally
      imap_host,
      imap_port || 993,
      email_address,
      password
    );
    return res.status(201).json({ message: 'IMAP credentials added successfully', id: result.id });
  } catch (err: any) {
    console.error('Error adding IMAP credentials:', err);
    return res.status(500).json({ error: err.message || 'Failed to add IMAP credentials' });
  }
});

export default router;