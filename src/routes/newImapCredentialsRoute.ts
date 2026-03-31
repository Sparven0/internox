import express from "express";
import { addImapCredentials } from "../DATABASE/INTEGRATIONS/insertImapCredentials";
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

export default router;