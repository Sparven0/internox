import { login } from "../utils/login";
import express from "express";
import { authCompanyAdmin } from "../MIDDLEWARES/authCompanyAdmin";
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        await login(req, res);
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

export default router;  