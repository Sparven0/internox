import express from "express";
import { authCompanyAdmin } from "../MIDDLEWARES/authCompanyAdmin";
import { insertToken } from "../DATABASE/INTEGRATIONS/insertTokensFunc";
const router = express.Router();

/**
 * Route to handle new credentials submission.
 * Expects a POST request with company name and token details.
 */

/**
 * @openapi
 * /new-credentials:
 *   post:
 *     summary: Add new credentials
 *     description: Adds new credentials for a company.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               companyName:
 *                 type: string
 *               tokens:
 *                 type: object
 *                 properties:
 *                   service:
 *                     type: string
 *                   access_token:
 *                     type: string
 *                   refresh_token:
 *                     type: string
 *                   expires_at:
 *                     type: string
 *     responses:
 *       200:
 *         description: Tokens inserted successfully.
 *       500:
 *         description: Error inserting tokens.
 */

router.post("/", async (req, res) => {
const { companyName, tokens } = req.body;
    try{
        await insertToken(companyName, tokens);
        res.status(200).json({ message: "Tokens inserted successfully" });
    }
    catch (error) {
        console.error("Error inserting tokens:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

export default router;