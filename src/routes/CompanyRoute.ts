import { extractCompany } from "../DATABASE/COMPANIES/extractCompanyFunc";
import express from "express";
const router = express.Router();

/**
 * @openapi
 * /company:
 *   get:
 *     summary: Extract company details
 *     description: Fetches details of a company by its name.
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: Name of the company to extract.
 *     responses:
 *       200:
 *         description: Company extracted successfully.
 *       500:
 *         description: Error extracting company.
 */

router.get("/", async (req, res) => {
    const name = req.query.name as string;
    try {
        const companyData = await extractCompany(name);
        res.status(200).json({ message: "Company extracted successfully", company: companyData });
    } catch (error) {
        console.error("Error extracting company:", error);
        res.status(500).json({ message: "Error extracting company" });
    }
});

export default router;