"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
var generateToken = function () {
    var token = jsonwebtoken_1.default.sign({ role: 'super_admin' }, // Payload
    process.env.JWT_SECRET, // Secret key
    { expiresIn: '1h' } // Token expiration
    );
    console.log('Generated Token:', token);
};
generateToken();
