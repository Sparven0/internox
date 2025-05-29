"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdmin = checkAdmin;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function checkAdmin(req, res, next) {
    var authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    var token = authHeader.split(" ")[1];
    try {
        var decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decoded);
        // Ensure the role is admin
        if (decoded.role !== "super_admin") {
            return res.status(403).json({ message: "Forbidden: Admin access required" });
        }
        next(); // User is admin, proceed to the next middleware or route
    }
    catch (error) {
        console.error("Error verifying token:", error);
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}
