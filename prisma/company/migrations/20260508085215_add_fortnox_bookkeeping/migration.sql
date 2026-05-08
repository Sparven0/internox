-- CreateTable
CREATE TABLE "fortnox_financial_years" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "fortnox_id" INTEGER NOT NULL,
    "from_date" DATE NOT NULL,
    "to_date" DATE NOT NULL,
    "account_chart_type" TEXT,
    "accounting_method" TEXT,
    "raw_data" JSONB,
    "synced_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fortnox_financial_years_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fortnox_accounts" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "account_number" INTEGER NOT NULL,
    "financial_year_id" UUID NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "balance_brought_forward" DECIMAL(14,2),
    "balance_carried_forward" DECIMAL(14,2),
    "vat_code" TEXT,
    "sru" INTEGER,
    "raw_data" JSONB,
    "synced_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fortnox_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fortnox_vouchers" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "voucher_series" TEXT NOT NULL,
    "voucher_number" INTEGER NOT NULL,
    "financial_year_id" UUID NOT NULL,
    "transaction_date" DATE NOT NULL,
    "description" TEXT,
    "reference_type" TEXT,
    "reference_number" TEXT,
    "cost_center" TEXT,
    "project" TEXT,
    "approval_state" INTEGER,
    "raw_data" JSONB,
    "synced_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fortnox_vouchers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fortnox_voucher_rows" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "voucher_id" UUID NOT NULL,
    "account_number" INTEGER NOT NULL,
    "debit" DECIMAL(14,2),
    "credit" DECIMAL(14,2),
    "description" TEXT,
    "cost_center" TEXT,
    "project" TEXT,

    CONSTRAINT "fortnox_voucher_rows_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "fortnox_financial_years_fortnox_id_key" ON "fortnox_financial_years"("fortnox_id");

-- CreateIndex
CREATE UNIQUE INDEX "fortnox_accounts_account_number_financial_year_id_key" ON "fortnox_accounts"("account_number", "financial_year_id");

-- CreateIndex
CREATE UNIQUE INDEX "fortnox_vouchers_voucher_series_voucher_number_financial_ye_key" ON "fortnox_vouchers"("voucher_series", "voucher_number", "financial_year_id");

-- AddForeignKey
ALTER TABLE "fortnox_accounts" ADD CONSTRAINT "fortnox_accounts_financial_year_id_fkey" FOREIGN KEY ("financial_year_id") REFERENCES "fortnox_financial_years"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fortnox_vouchers" ADD CONSTRAINT "fortnox_vouchers_financial_year_id_fkey" FOREIGN KEY ("financial_year_id") REFERENCES "fortnox_financial_years"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fortnox_voucher_rows" ADD CONSTRAINT "fortnox_voucher_rows_voucher_id_fkey" FOREIGN KEY ("voucher_id") REFERENCES "fortnox_vouchers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
