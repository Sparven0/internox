"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompanyPool = getCompanyPool;
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var pools = {};
/**
 * Retrieves or creates a connection pool for the given company database name.
 * @param dbName - The name of the company's database
 * @returns A Pool connected to the company's database
 */
function getCompanyPool(dbName) {
    if (!pools[dbName]) {
        pools[dbName] = new pg_1.Pool({
            host: process.env.POSTGRES_HOST || 'localhost',
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: dbName, // Dynamic database name per company
            port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
        });
    }
    return pools[dbName];
}
