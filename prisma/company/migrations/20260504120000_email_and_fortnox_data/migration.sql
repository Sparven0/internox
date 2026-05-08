-- Migration: email_and_fortnox_data
-- Adds a normalized emails table (multi-source: IMAP, Gmail, Outlook, …),
-- Fortnox data cache tables (customers, invoices, invoice rows), and a trigger
-- that auto-assigns user_id on the emails table by matching from_address to users.email.

-- ─────────────────────────────────────────────────────────────────────────────
-- emails
-- Normalized email storage, provider-agnostic.
-- Duplicates are prevented by the UNIQUE constraint on message_id (RFC 2822).
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE "emails" (
    "id"                 UUID        NOT NULL DEFAULT gen_random_uuid(),
    -- RFC 2822 Message-ID header – globally unique per email
    "message_id"         TEXT        NOT NULL,
    -- Source provider: 'imap' | 'gmail' | 'outlook' | 'exchange' | …
    "source"             TEXT        NOT NULL DEFAULT 'imap',
    -- Which IMAP credential was used to fetch this (nullable for OAuth sources)
    "imap_credential_id" UUID,
    -- Resolved internal user (auto-populated by trigger below)
    "user_id"            UUID,
    -- Resolved internal customer (matched by application logic via domain)
    "customer_id"        UUID,
    -- 'sent' or 'received'
    "direction"          TEXT        NOT NULL DEFAULT 'sent',
    "subject"            TEXT,
    "from_address"       TEXT        NOT NULL,
    "from_name"          TEXT,
    -- JSONB arrays of {address: string, name?: string}
    "to_addresses"       JSONB       NOT NULL DEFAULT '[]',
    "cc_addresses"       JSONB       NOT NULL DEFAULT '[]',
    "bcc_addresses"      JSONB       NOT NULL DEFAULT '[]',
    "reply_to"           TEXT,
    "sent_at"            TIMESTAMPTZ,
    "body_text"          TEXT,
    "body_html"          TEXT,
    -- Threading
    "in_reply_to"        TEXT,
    "thread_id"          TEXT,
    -- Mailbox name where it was found, e.g. 'INBOX', '[Gmail]/Sent Mail'
    "mailbox"            TEXT,
    "created_at"         TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "emails_pkey" PRIMARY KEY ("id")
);

-- Duplicate prevention: one row per unique email across all sources
CREATE UNIQUE INDEX "emails_message_id_key" ON "emails"("message_id");

-- Fast user/customer lookups
CREATE INDEX "emails_user_id_idx"      ON "emails"("user_id");
CREATE INDEX "emails_customer_id_idx"  ON "emails"("customer_id");
CREATE INDEX "emails_sent_at_idx"      ON "emails"("sent_at" DESC);
CREATE INDEX "emails_from_address_idx" ON "emails"(lower("from_address"));
CREATE INDEX "emails_thread_id_idx"    ON "emails"("thread_id") WHERE "thread_id" IS NOT NULL;

-- FK: imap_credentials
ALTER TABLE "emails"
    ADD CONSTRAINT "emails_imap_credential_id_fkey"
    FOREIGN KEY ("imap_credential_id") REFERENCES "imap_credentials"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- FK: users
ALTER TABLE "emails"
    ADD CONSTRAINT "emails_user_id_fkey"
    FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- FK: customers
ALTER TABLE "emails"
    ADD CONSTRAINT "emails_customer_id_fkey"
    FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ─────────────────────────────────────────────────────────────────────────────
-- Trigger: auto-assign user_id by matching from_address → users.email
-- Runs BEFORE INSERT OR UPDATE so the final row already has user_id set.
-- ─────────────────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION assign_email_user()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
DECLARE
    matched_user_id UUID;
BEGIN
    -- Only attempt auto-assignment when user_id is not already provided
    IF NEW.user_id IS NULL THEN
        SELECT id INTO matched_user_id
        FROM users
        WHERE lower(email) = lower(NEW.from_address)
        LIMIT 1;

        IF matched_user_id IS NOT NULL THEN
            NEW.user_id := matched_user_id;
        END IF;
    END IF;

    RETURN NEW;
END;
$$;

CREATE TRIGGER emails_assign_user_trigger
    BEFORE INSERT OR UPDATE ON "emails"
    FOR EACH ROW EXECUTE FUNCTION assign_email_user();

-- ─────────────────────────────────────────────────────────────────────────────
-- fortnox_customers
-- Cache of customer records synced from Fortnox /3/customers.
-- customer_number is the Fortnox primary key; customer_id links to our Customer.
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE "fortnox_customers" (
    "id"                  UUID         NOT NULL DEFAULT gen_random_uuid(),
    "customer_number"     TEXT         NOT NULL,
    -- Optional link to our normalised Customer row
    "customer_id"         UUID,
    "name"                TEXT         NOT NULL,
    "organisation_number" TEXT,
    "email"               TEXT,
    "phone"               TEXT,
    "address"             TEXT,
    "zip_code"            TEXT,
    "city"                TEXT,
    "country"             TEXT,
    "currency"            TEXT,
    "active"              BOOLEAN      NOT NULL DEFAULT true,
    -- Full Fortnox API response, preserved for forward-compatibility
    "raw_data"            JSONB,
    "synced_at"           TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at"          TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fortnox_customers_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "fortnox_customers_customer_number_key" ON "fortnox_customers"("customer_number");
CREATE UNIQUE INDEX "fortnox_customers_customer_id_key" ON "fortnox_customers"("customer_id") WHERE "customer_id" IS NOT NULL;

ALTER TABLE "fortnox_customers"
    ADD CONSTRAINT "fortnox_customers_customer_id_fkey"
    FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ─────────────────────────────────────────────────────────────────────────────
-- fortnox_invoices
-- Cache of invoice headers synced from Fortnox /3/invoices.
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE "fortnox_invoices" (
    "id"              UUID          NOT NULL DEFAULT gen_random_uuid(),
    "invoice_number"  TEXT          NOT NULL,
    "customer_number" TEXT          NOT NULL,
    -- Optional link to our normalised Customer row
    "customer_id"     UUID,
    "invoice_date"    DATE          NOT NULL,
    "due_date"        DATE,
    "total_excl_vat"  DECIMAL(12,2),
    "total_incl_vat"  DECIMAL(12,2),
    "vat"             DECIMAL(12,2),
    "currency"        TEXT          NOT NULL DEFAULT 'SEK',
    -- e.g. 'unpaid' | 'paid' | 'overdue' | 'cancelled'
    "status"          TEXT,
    "our_reference"   TEXT,
    "your_reference"  TEXT,
    -- Full Fortnox API response, preserved for forward-compatibility
    "raw_data"        JSONB,
    "synced_at"       TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at"      TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fortnox_invoices_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "fortnox_invoices_invoice_number_key" ON "fortnox_invoices"("invoice_number");
CREATE INDEX "fortnox_invoices_customer_number_idx" ON "fortnox_invoices"("customer_number");
CREATE INDEX "fortnox_invoices_invoice_date_idx"    ON "fortnox_invoices"("invoice_date" DESC);
CREATE INDEX "fortnox_invoices_status_idx"          ON "fortnox_invoices"("status") WHERE "status" IS NOT NULL;

ALTER TABLE "fortnox_invoices"
    ADD CONSTRAINT "fortnox_invoices_customer_number_fkey"
    FOREIGN KEY ("customer_number") REFERENCES "fortnox_customers"("customer_number") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "fortnox_invoices"
    ADD CONSTRAINT "fortnox_invoices_customer_id_fkey"
    FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- ─────────────────────────────────────────────────────────────────────────────
-- fortnox_invoice_rows
-- Line items belonging to a Fortnox invoice.
-- ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE "fortnox_invoice_rows" (
    "id"             UUID         NOT NULL DEFAULT gen_random_uuid(),
    "invoice_number" TEXT         NOT NULL,
    "row_number"     INTEGER,
    "article_number" TEXT,
    "description"    TEXT,
    "quantity"       DECIMAL(10,2),
    "price"          DECIMAL(12,2),
    "vat_percent"    DECIMAL(5,2),
    "total"          DECIMAL(12,2),

    CONSTRAINT "fortnox_invoice_rows_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "fortnox_invoice_rows_invoice_number_idx" ON "fortnox_invoice_rows"("invoice_number");

ALTER TABLE "fortnox_invoice_rows"
    ADD CONSTRAINT "fortnox_invoice_rows_invoice_number_fkey"
    FOREIGN KEY ("invoice_number") REFERENCES "fortnox_invoices"("invoice_number") ON DELETE CASCADE ON UPDATE CASCADE;
