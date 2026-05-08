import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../__generated__/master';
import dotenv from 'dotenv';

dotenv.config();

// Raw pool — still needed for DDL (CREATE DATABASE) in onboard.ts and DB health checks
export const masterPool = new Pool({ connectionString: process.env.DATABASE_URL });

// Prisma client for all master DB queries
export const masterClient = new PrismaClient({
  adapter: new PrismaPg(masterPool),
});

export default masterPool;
