import express from "express";
import { authCompanyAdmin } from "../MIDDLEWARES/authCompanyAdmin";
import { extractImapCredentials } from "../DATABASE/INTEGRATIONS/Email/extractImapDetails";

const router = express.Router();

/**
 * @openapi
 * /get-imap:
 *   get:
 *     summary: Get IMAP credentials
 *     description: Fetches IMAP credentials for a specific company.
 *     parameters:
 *       - in: query
 *         name: company
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the company to fetch IMAP credentials for.
 *     responses:
 *       200:
 *         description: IMAP credentials fetched successfully.
 *       400:
 *         description: Missing company parameter.
 *       500:
 *         description: Error fetching IMAP credentials.
 */

router.get("/", authCompanyAdmin, async (req, res): Promise<void> => {
    const { company } = req.query;

    if (!company) {
        res.status(400).json({ message: "Company is required" });
        return; // Ensure we return after sending the response
    }

    try {
        const credentials = await extractImapCredentials(company as string);
        res.status(200).json({ message: "IMAP credentials extracted successfully", credentials: credentials.rows });
    } catch (error) {
        console.error("Error extracting IMAP credentials:", error);
        res.status(500).json({ message: "Error extracting IMAP credentials" });
    }
});

export default router;
