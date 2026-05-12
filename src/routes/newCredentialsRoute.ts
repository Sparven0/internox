import express from "express";
import { authCompanyAdmin } from "../MIDDLEWARES/authCompanyAdmin";
import { insertToken } from "../DATABASE/INTEGRATIONS/insertTokensFunc";
const router = express.Router();

/**
 * Route to handle new credentials submission.
 * Expects a POST request with company name and token details.
 */

router.post("/", authCompanyAdmin, async (req, res) => {
const { companyName, tokens } = req.body;
    try{
        await insertToken(companyName, tokens);
        res.status(200).json({ message: "Tokens inserted successfully" });
    }
    catch (error) {
        console.error("Error inserting tokens:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

export default router;