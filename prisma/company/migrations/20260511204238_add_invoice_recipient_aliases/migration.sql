-- CreateTable
CREATE TABLE "invoice_recipient_aliases" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "alias" TEXT NOT NULL,
    "customer_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invoice_recipient_aliases_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "invoice_recipient_aliases_alias_key" ON "invoice_recipient_aliases"("alias");

-- AddForeignKey
ALTER TABLE "invoice_recipient_aliases" ADD CONSTRAINT "invoice_recipient_aliases_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
