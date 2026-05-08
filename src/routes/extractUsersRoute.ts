import express from "express";
import { authCompanyAdmin } from "../MIDDLEWARES/authCompanyAdmin";
import { extractUser } from "../DATABASE/USERS/extractUserFunc";

const router = express.Router();

router.get("/", authCompanyAdmin, async (req, res) => {
    const { company } = req.query;
    try {
        const users = await extractUser(company as string);
        res.status(200).json({ message: "Users extracted successfully", users });
    } catch (error) {
        console.error("Error extracting users:", error);
        res.status(500).json({ message: "Error extracting users" });
    }
});

export default router;