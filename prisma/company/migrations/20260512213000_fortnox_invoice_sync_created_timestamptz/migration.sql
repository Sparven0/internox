-- Align fortnox_invoices.synced_at & created_at with sent_at (timestamptz) so tools show a single UTC semantics.
-- Values were written by the app as UTC wall-clock instants in naive timestamp columns.
ALTER TABLE "fortnox_invoices"
  ALTER COLUMN "synced_at" DROP DEFAULT,
  ALTER COLUMN "created_at" DROP DEFAULT;

ALTER TABLE "fortnox_invoices"
  ALTER COLUMN "synced_at" TYPE TIMESTAMPTZ(6) USING ("synced_at" AT TIME ZONE 'UTC'),
  ALTER COLUMN "created_at" TYPE TIMESTAMPTZ(6) USING ("created_at" AT TIME ZONE 'UTC');

ALTER TABLE "fortnox_invoices"
  ALTER COLUMN "synced_at" SET DEFAULT CURRENT_TIMESTAMP,
  ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP;
