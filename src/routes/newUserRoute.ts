import express from "express";
import { NextFunction } from "express";
import { authCompanyAdmin } from "../MIDDLEWARES/authCompanyAdmin";
const router = express.Router();
import { createUser } from "../DATABASE/USERS/insertUserFunc";

/**
 * @openapi
 * /new-user:
 *   post:
 *     summary: Create a new user
 *     description: Allows company admins to create a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               companyDomain:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully.
 *       500:
 *         description: Failed to create user.
 */

router.post("/", authCompanyAdmin, async (req, res, next: NextFunction) => {
    const { email, companyDomain, password } = req.body;

    try {
        await createUser(email, companyDomain, password);
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to create user" + err });
    }
});

export default router;
