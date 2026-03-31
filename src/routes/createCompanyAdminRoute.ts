import express from "express";
import { NextFunction } from "express";
import { createCompanyAdmin } from "../utils/createCompanyAdmin";
import { checkAdmin } from "../MIDDLEWARES/requireSuperAdmin";

const router = express.Router();

/**
 * @openapi
 * /create-company-admin:
 *   post:
 *     summary: Create a company admin
 *     description: Allows super admins to create a company admin for a specific company.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               company:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Company admin created successfully.
 *       400:
 *         description: Error creating company admin.
 */

router.post('/', checkAdmin, async (req, res: express.Response, next: NextFunction) => {
    const {company, email, password} = req.body;
    try {
        await createCompanyAdmin(company, email, password);
        res.status(201).json({ message: "Company admin created successfully" });
    } catch (error) {
        console.error("Error creating company admin:", error);
        res.status(400).json({ message: "Error creating company admin: " + error });
    }
})

export default router;