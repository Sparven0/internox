import express from "express";
import { NextFunction } from "express";
import { authCompanyAdmin } from "../MIDDLEWARES/authCompanyAdmin";
const router = express.Router();
import { createUser } from "../DATABASE/USERS/insertUserFunc";

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
