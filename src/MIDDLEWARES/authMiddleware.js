"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var JWT_SECRET = process.env.JWT_SECRET || '';
function authMiddleware(req, res, next) {
    var authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }
    var token = authHeader.split(' ')[1];
    try {
        var decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET); // Type assertion to access 'role' property
        if (decoded.role !== 'admin') { // Corrected comparison
            return res.status(403).json({ message: 'Forbidden: Admin access required' });
        }
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}
exports.default = authMiddleware;
