import express from "express";
import { NextFunction } from "express";
import { createCompanyAdmin } from "../utils/createCompanyAdmin";
import { checkAdmin } from "../MIDDLEWARES/requireSuperAdmin";

const router = express.Router();

router.post('/', checkAdmin, async (req, res: express.Response, next: NextFunction) => {
    const {company, email, password} = req.body;
    try {
        await createCompanyAdmin(company, email, password);
        res.status(201).json({ message: "Company admin created successfully" });
    } catch (error) {
        console.error("Error creating company admin:", error);
        res.status(400).json({ message: "Error creating company admin: " + error });
    }
})

export default router;