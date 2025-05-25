import express from "express";
import { onboardCompany } from '../DATABASE/onboard';
import { Request, Response } from 'express';
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const { name, domain } = req.body;
    try {
        await onboardCompany(name, domain);
        res.status(200).json({ message: "Company created successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error occurred" + error });
    }
});

export default router;