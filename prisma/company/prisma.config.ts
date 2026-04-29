import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "schema.prisma",
  migrations: {
    path: "migrations",
  },
  datasource: {
    // Point COMPANY_DATABASE_URL at any one company DB (or a dev clone) when running migrations.
    // At runtime, PrismaClient uses the PrismaPg adapter with a per-company pool instead.
    url: process.env.COMPANY_DATABASE_URL ?? "",
  },
});
