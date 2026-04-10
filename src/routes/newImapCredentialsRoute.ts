import express from "express";
import { addImapCredentials } from "../DATABASE/INTEGRATIONS/insertImapCredentials";
import { authCompanyAdmin } from '../MIDDLEWARES/authCompanyAdmin';
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
 *               company:
 *                 type: string
 *               user:
 *                 type: string
 *               imapHost:
 *                 type: string
 *               imapPort:
 *                 type: integer
 *               emailAddress:
 *                 type: string
 *               plainPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: IMAP credentials added successfully.
 *       500:
 *         description: Error adding IMAP credentials.
 */

router.post("/", async (req, res) => {
    const { company, user, imapHost, imapPort, emailAddress, plainPassword } = req.body;
    
    try{
        const data = await addImapCredentials(company, user, imapHost, imapPort, emailAddress, plainPassword);
        res.json({ message: "IMAP credentials added successfully" + data });
    }
catch (error) {
        console.error("Error adding IMAP credentials:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}) 

// POST / - body: { companyId, userId, imap_host, imap_port, email_address, password, use_tls }
router.post('/', authCompanyAdmin, async (req, res) => {
  const { companyId, userId, imap_host, imap_port, email_address, password, use_tls } = req.body;
  if (!companyId || !userId || !imap_host || !email_address || !password) {
    return res.status(400).json({ error: 'companyId, userId, imap_host, email_address and password are required' });
  }

  try {
    const result = await addImapCredentials(companyId, userId, imap_host, imap_port || 993, email_address, password);
    return res.status(201).json({ id: result.id });
  } catch (err: any) {
    console.error('Error adding IMAP credentials:', err);
    return res.status(500).json({ error: err.message || 'Failed to add IMAP credentials' });
  }
});

export default router;