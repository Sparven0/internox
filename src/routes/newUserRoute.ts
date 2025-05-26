import express from "express";
const router = express.Router();
import { createUser } from "../DATABASE/USERS/insertUserFunc";

router.post("/", async (req, res) => {
    const { email, companyDomain, password } = req.body;

    try {
        await createUser(email, companyDomain, password);
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to create user" + err });
    }
});

export default router;
