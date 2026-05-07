-- DropIndex
DROP INDEX "emails_customer_id_idx";

-- DropIndex
DROP INDEX "emails_sent_at_idx";

-- DropIndex
DROP INDEX "emails_user_id_idx";

-- DropIndex
DROP INDEX "fortnox_invoice_rows_invoice_number_idx";

-- DropIndex
DROP INDEX "fortnox_invoices_customer_number_idx";

-- DropIndex
DROP INDEX "fortnox_invoices_invoice_date_idx";

-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "email" TEXT;
