/*
  Warnings:

  - A unique constraint covering the columns `[fortnox_customer_number]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "customers_fortnox_customer_number_key" ON "customers"("fortnox_customer_number");
