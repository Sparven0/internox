
import express from "express";
import { addImapCredentials } from "../DATABASE/INTEGRATIONS/insertImapCredentials";
const router = express.Router();



router.post("/", async (req, res) => {
    const { company, user, imapHost, imapPort, emailAddress, plainPassword } = req.body;
    
    try{
        const data = await addImapCredentials(company, user, imapHost, imapPort, emailAddress, plainPassword);
        res.json({ message: "IMAP credentials added successfully" + data });
    }
catch (error) {
        console.error("Error adding IMAP credentials:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}) 

export default router;