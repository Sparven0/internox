import express from "express";
import { NextFunction } from "express";
import { onboardCompany } from "../DATABASE/onboard";
import { Request, Response } from "express";
import authMiddleware from "../MIDDLEWARES/authMiddleware";
import { checkAdmin } from "../MIDDLEWARES/requireSuperAdmin";
const router = express.Router();

/**
 * @openapi
 * /onboarding:
 *   post:
 *     summary: Onboard a new company
 *     description: Allows super admins to onboard a new company.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               domain:
 *                 type: string
 *     responses:
 *       200:
 *         description: Company created successfully.
 *       500:
 *         description: Error occurred while creating company.
 */

router.post(
  "/",
  checkAdmin,
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, domain } = req.body;
    try {
      await onboardCompany(name, domain);
      res.status(200).json({ message: "Company created successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error occurred" + error });
    }
  },
);

export default router;
