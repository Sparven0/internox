import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function checkAdmin(req: Request, res: Response, next: NextFunction): any {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { role: string };
        console.log("Decoded token:", decoded);

        // Ensure the role is admin
        if (decoded.role !== "super_admin") {
            return res.status(403).json({ message: "Forbidden: Admin access required" });
        }

        next(); // User is admin, proceed to the next middleware or route
    } catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}