import { insertCompany } from "../DATABASE/COMPANIES/insertCompanyFunc";
import express from "express";
import authMiddleware from "../MIDDLEWARES/authMiddleware";
import { checkAdmin } from "../MIDDLEWARES/requireSuperAdmin";
const router = express.Router();

router.post("/", authMiddleware, checkAdmin, async (req, res) => {
    const { name, domain } = req.body;
    try {
        const companyId = await insertCompany(name, domain);
        res.status(201).json({ message: "Company created successfully", companyId });
    } catch (error) {
        console.error("Error creating company:", error);
        res.status(500).json({ message: "Error creating company" });
    }
});


export default router;