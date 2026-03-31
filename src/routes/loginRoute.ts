import { login } from "../utils/login";
import express from "express";
import { authCompanyAdmin } from "../MIDDLEWARES/authCompanyAdmin";
const router = express.Router();

/**
 * @openapi
 * /login:
 *   post:
 *     summary: User login
 *     description: Authenticates a user and returns a token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               companyDomain:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful.
 *       500:
 *         description: Internal server error.
 */

router.post("/", async (req, res) => {
    try {
        await login(req, res);
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

export default router;