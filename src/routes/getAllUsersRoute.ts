import express from "express";
import { authCompanyAdmin } from "../MIDDLEWARES/authCompanyAdmin";
import { getAllUsers } from "../DATABASE/USERS/getAllUsers";
const router = express.Router();

router.get("/", authCompanyAdmin, async (req, res) => {
    const { company } = req.query;
    try {
        const users = await getAllUsers(company as string);
        res.status(200).json({ message: "Users fetched successfully", users });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Error fetching users" });
    }
});


export default router;  