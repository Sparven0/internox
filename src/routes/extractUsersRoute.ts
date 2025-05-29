import express from "express";
import { authCompanyAdmin } from "../MIDDLEWARES/authCompanyAdmin";
import { extractUser } from "../DATABASE/USERS/extractUserFunc";
const router = express.Router();

router.get("/", authCompanyAdmin, async (req, res) => {
    const {company, email} = req.query;
    try {
        const userData = await extractUser(company as string, email as string);
        res.status(200).json({ message: "User extracted successfully", user: userData });
    } catch (error) {
        console.error("Error extracting user:", error);
        res.status(500).json({ message: "Error extracting user" });
    }
})

export default router;