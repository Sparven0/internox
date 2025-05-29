"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authCompanyAdmin = authCompanyAdmin;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authCompanyAdmin(req, res, next) {
    var _a;
    var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1]; // Extract token from "Bearer <token>"
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        // Check if the user has the required role
        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next(); // Proceed to the next middleware or route handler
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}
