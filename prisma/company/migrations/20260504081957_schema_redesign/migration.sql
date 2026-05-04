/*
  Warnings:

  - You are about to drop the column `company_name` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `company_id` on the `employee_customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[company_id,service]` on the table `company_integrations` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,customer_id]` on the table `employee_customer` will be added. If there are existing duplicate values, this will fail.
  - Made the column `service` on table `company_integrations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `customers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `company_id` on table `customers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `employee_customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `customer_id` on table `employee_customer` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "employee_customer" DROP CONSTRAINT "employee_customer_company_id_fkey";

-- DropIndex
DROP INDEX "customers_email_key";

-- AlterTable
ALTER TABLE "company_integrations" ALTER COLUMN "service" SET NOT NULL;

-- AlterTable
ALTER TABLE "customers" DROP COLUMN "company_name",
DROP COLUMN "email",
ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "domain" TEXT,
ADD COLUMN     "fortnox_customer_number" TEXT,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "company_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "employee_customer" DROP COLUMN "company_id",
ADD COLUMN     "assigned_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "assigned_by" UUID,
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "customer_id" SET NOT NULL;

-- CreateTable
CREATE TABLE "time_entries" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "customer_id" UUID,
    "date" DATE NOT NULL,
    "hours" DECIMAL(5,2) NOT NULL,
    "description" TEXT,
    "source" TEXT NOT NULL DEFAULT 'bjornlunden',
    "raw_customer_name" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "time_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "email_activity" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "customer_id" UUID,
    "sent_at" TIMESTAMP(6) NOT NULL,
    "recipient_email" TEXT NOT NULL,
    "recipient_domain" TEXT NOT NULL,
    "subject" TEXT,
    "message_id" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "email_activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fortnox_sync_log" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "company_id" UUID NOT NULL,
    "resource" TEXT NOT NULL,
    "last_synced_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "fortnox_sync_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "email_activity_message_id_key" ON "email_activity"("message_id");

-- CreateIndex
CREATE UNIQUE INDEX "fortnox_sync_log_company_id_resource_key" ON "fortnox_sync_log"("company_id", "resource");

-- CreateIndex
CREATE UNIQUE INDEX "company_integrations_company_id_service_key" ON "company_integrations"("company_id", "service");

-- CreateIndex
CREATE UNIQUE INDEX "employee_customer_user_id_customer_id_key" ON "employee_customer"("user_id", "customer_id");

-- AddForeignKey
ALTER TABLE "time_entries" ADD CONSTRAINT "time_entries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_entries" ADD CONSTRAINT "time_entries_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "email_activity" ADD CONSTRAINT "email_activity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "email_activity" ADD CONSTRAINT "email_activity_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fortnox_sync_log" ADD CONSTRAINT "fortnox_sync_log_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
