import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../__generated__/company';
import dotenv from 'dotenv';

dotenv.config();

const pools: Record<string, Pool> = {};
const clients: Record<string, PrismaClient> = {};

export function getCompanyPool(dbName: string): Pool {
  if (!pools[dbName]) {
    pools[dbName] = new Pool({
      host: process.env.POSTGRES_HOST || 'localhost',
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: dbName,
      port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
    });
  }
  return pools[dbName];
}

export function getCompanyClient(dbName: string): PrismaClient {
  if (!clients[dbName]) {
    clients[dbName] = new PrismaClient({ adapter: new PrismaPg(getCompanyPool(dbName)) });
  }
  return clients[dbName];
}
