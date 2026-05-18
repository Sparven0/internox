import { masterClient } from "../../masterpool";
import { getCompanyClient } from "../../connectionManager";
import fetchFortnoxForCompany from "./fortnoxData";

const PAGE_SIZE = 500; // Fortnox max page size

/**
 * Fetch all pages of a paginated Fortnox list endpoint.
 * Fortnox returns MetaInformation['@TotalPages'] to signal how many pages exist.
 */
async function fetchAllPages(
  companyId: string,
  resource: string,
): Promise<any[]> {
  const results: any[] = [];
  let page = 1;

  while (true) {
    const data = await fetchFortnoxForCompany(
      companyId,
      `/${resource}?page=${page}&limit=${PAGE_SIZE}`,
    );
    // The array is always under the PascalCase resource key, e.g. "Customers" or "Invoices"
    const rootKey = Object.keys(data).find((k) => Array.isArray(data[k]));
    const items: any[] = rootKey ? data[rootKey] : [];
    results.push(...items);
    console.log(`Fetched page ${page} of ${resource} for company ${companyId}, got ${items.length} items.`);

    const totalPages: number = data?.MetaInformation?.["@TotalPages"] ?? 1;
    if (page >= totalPages) break;
    page++;
  }

  return results;
}

export function deriveInvoiceStatus(inv: any): string {
  if (inv.Cancelled) return 'cancelled';
  if (Number(inv.Balance ?? inv.Total) === 0) return 'paid';
  if (inv.DueDate && new Date(inv.DueDate) < new Date()) return 'overdue';
  return 'unpaid';
}

/** Fortnox may return `Sent` as boolean or string (e.g. XML-backed integrations). */
function truthyFortnoxFlag(v: unknown): boolean | null {
  if (v === true || v === 1) return true;
  if (v === false || v === 0 || v == null) return false;
  if (typeof v === 'string') {
    const t = v.trim().toLowerCase();
    if (t === 'false' || t === '0' || t === 'no' || t === '') return false;
    if (t === 'true' || t === '1' || t === 'yes') return true;
    return null;
  }
  return Boolean(v);
}

export function isFortnoxInvoiceSent(inv: any): boolean {
  const s = truthyFortnoxFlag(inv?.Sent);
  return s === true;
}

/** Bookkept / accounted in Fortnox (`Booked` in API; separate from customer `Sent`). */
export function isFortnoxInvoiceBooked(inv: any): boolean {
  const b = truthyFortnoxFlag(inv?.Booked ?? inv?.booked);
  return b === true;
}

/** First parseable value from Fortnox date/datetime strings. */
export function firstFortnoxDate(...raw: unknown[]): Date | null {
  for (const v of raw) {
    if (v == null || v === '') continue;
    const d = new Date(String(v));
    if (!Number.isNaN(d.getTime())) return d;
  }
  return null;
}

/**
 * Like {@link firstFortnoxDate}, but ignores calendar-date-only strings (`YYYY-MM-DD`)
 * so we do not treat them as instants at UTC midnight.
 */
export function firstFortnoxInstant(...raw: unknown[]): Date | null {
  for (const v of raw) {
    if (v == null || v === '') continue;
    const s = String(v).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(s)) continue;
    const d = new Date(s);
    if (!Number.isNaN(d.getTime())) return d;
  }
  return null;
}

/**
 * When the invoice is bookkept, store that instant in `fortnox_invoices.sent_at`.
 * Prefer Fortnox WebSocket timestamp(s) when present (full datetimes only — bare
 * `YYYY-MM-DD` strings are ignored). Otherwise use `fallback`.
 *
 * Fortnox REST fields such as InvoiceDate / BookedDate are often date-only
 * ("YYYY-MM-DD") and parse as midnight UTC — avoid using those as booked time.
 */
export function resolveFortnoxBookedAt(
  _inv: any,
  wsTimestamp?: string | string[] | null,
  fallback: Date = new Date(),
): Date {
  const candidates = wsTimestamp == null
    ? []
    : Array.isArray(wsTimestamp)
      ? wsTimestamp
      : [wsTimestamp];
  for (const raw of candidates) {
    const d = firstFortnoxInstant(raw);
    if (d) return d;
  }
  return fallback;
}

function asObject(v: unknown): Record<string, unknown> | null {
  if (v && typeof v === "object" && !Array.isArray(v)) return v as Record<string, unknown>;
  return null;
}

/**
 * Keep richer invoice rawData produced by detail/websocket paths.
 * The bulk invoice list endpoint usually returns a smaller payload.
 */
function shouldReplaceInvoiceRawData(existingRaw: unknown, incomingRaw: unknown): boolean {
  const existing = asObject(existingRaw);
  const incoming = asObject(incomingRaw);

  if (!incoming) return false;
  if (!existing) return true;

  const existingRows = Array.isArray((existing as any).InvoiceRows)
    ? ((existing as any).InvoiceRows as unknown[]).length
    : 0;
  const incomingRows = Array.isArray((incoming as any).InvoiceRows)
    ? ((incoming as any).InvoiceRows as unknown[]).length
    : 0;

  if (existingRows > 0 && incomingRows === 0) return false;

  const existingKeys = Object.keys(existing).length;
  const incomingKeys = Object.keys(incoming).length;
  if (existingKeys > incomingKeys + 3) return false;

  return true;
}

function resolveBookedAtFromRest(inv: any): Date | null {
  return firstFortnoxInstant(
    inv?.BookedAt,
    inv?.BookedDate,
    inv?.BookkeepDate,
    inv?.AccountingDate,
    inv?.InvoiceDate,
  );
}

function isLikelyDateOnlyFallback(sentAt: Date, inv: any): boolean {
  const isMidnightUtc =
    sentAt.getUTCHours() === 0 &&
    sentAt.getUTCMinutes() === 0 &&
    sentAt.getUTCSeconds() === 0 &&
    sentAt.getUTCMilliseconds() === 0;
  if (!isMidnightUtc) return false;

  const invoiceDate = firstFortnoxDate(inv?.InvoiceDate);
  if (!invoiceDate) return false;

  return sentAt.toISOString().slice(0, 10) === invoiceDate.toISOString().slice(0, 10);
}

/**
 * Sync Fortnox customers and invoice headers for a given company.
 *
 * - Upserts fortnox_customers (keyed on customer_number)
 * - Upserts fortnox_invoices (keyed on invoice_number)
 * - Links fortnox_customers → internal customers via fortnox_customer_number match
 * - Updates fortnox_sync_log with the current timestamp
 *
 * Invoice rows are intentionally not synced here — each invoice requires a
 * separate detail request. Call syncFortnoxInvoiceRows() separately when needed.
 */
export async function syncFortnoxData(companyId: string): Promise<{
  customers: number;
  invoices: number;
}> {
  const company = await masterClient.company.findUnique({
    where: { id: companyId },
  });
  if (!company) throw new Error(`Company not found: ${companyId}`);

  const client = getCompanyClient(company.dbName);
  const now = new Date();

  // ── Customers ─────────────────────────────────────────────────────────────
  const rawCustomers = await fetchAllPages(companyId, "customers");
  let customerCount = 0;

  for (const c of rawCustomers) {
    const customerNumber = String(c.CustomerNumber ?? "").trim();
    if (!customerNumber) continue;

    // Upsert the internal Customer row so we always have a stable UUID to link to
    const internalCustomer = await client.customer.upsert({
      where: { fortnoxCustomerNumber: customerNumber },
      create: {
        fortnoxCustomerNumber: customerNumber,
        name: c.Name ?? "",
        email: c.Email || null,
        domain: null,
        companyId: company.id,
      },
      update: {
        name: c.Name ?? undefined,
        email: c.Email || null,
      },
      select: { id: true },
    });

    await client.fortnoxCustomer.upsert({
      where: { customerNumber },
      create: {
        customerNumber,
        customerId: internalCustomer?.id ?? null,
        name: c.Name ?? "",
        organisationNumber: c.OrganisationNumber || null,
        email: c.Email || null,
        phone: c.Phone || null,
        address: c.Address1 || null,
        zipCode: c.ZipCode || null,
        city: c.City || null,
        country: c.Country || null,
        currency: c.Currency || null,
        active: c.Active !== false,
        rawData: c,
        syncedAt: now,
      },
      update: {
        customerId: internalCustomer?.id ?? undefined,
        name: c.Name ?? undefined,
        organisationNumber: c.OrganisationNumber || null,
        email: c.Email || null,
        phone: c.Phone || null,
        address: c.Address1 || null,
        zipCode: c.ZipCode || null,
        city: c.City || null,
        country: c.Country || null,
        currency: c.Currency || null,
        active: c.Active !== false,
        rawData: c,
        syncedAt: now,
      },
    });

    customerCount++;
  }

  // ── Invoices (headers only) ────────────────────────────────────────────────
  const rawInvoices = await fetchAllPages(companyId, "invoices");
  let invoiceCount = 0;

  for (const inv of rawInvoices) {
    const invoiceNumber = String(inv.DocumentNumber ?? "").trim();
    const customerNumber = String(inv.CustomerNumber ?? "").trim();
    if (!invoiceNumber || !customerNumber) continue;

    const existingInvoice = await client.fortnoxInvoice.findUnique({
      where: { invoiceNumber },
      select: { rawData: true },
    });

    // Ensure the fortnox_customer row exists before inserting the invoice FK
    const fnCustomer = await client.fortnoxCustomer.findUnique({
      where: { customerNumber },
      select: { customerId: true },
    });
    if (!fnCustomer) continue;

    const status = deriveInvoiceStatus(inv);
    const booked = isFortnoxInvoiceBooked(inv);
    const sentAt = booked ? resolveBookedAtFromRest(inv) : null;
    const nextRawData = shouldReplaceInvoiceRawData(existingInvoice?.rawData, inv)
      ? inv
      : existingInvoice?.rawData;

    await client.fortnoxInvoice.upsert({
      where: { invoiceNumber },
      create: {
        invoiceNumber,
        customerNumber,
        customerId: fnCustomer.customerId ?? null,
        invoiceDate: new Date(inv.InvoiceDate),
        dueDate: inv.DueDate ? new Date(inv.DueDate) : null,
        totalExclVat: inv.Net != null ? parseFloat(inv.Net) : null,
        totalInclVat: inv.Total != null ? parseFloat(inv.Total) : null,
        vat: inv.TotalVAT != null ? parseFloat(inv.TotalVAT) : null,
        currency: inv.Currency || "SEK",
        status,
        ourReference: inv.OurReference || null,
        yourReference: inv.YourReference || null,
        rawData: inv,
        syncedAt: now,
        sentAt,
      },
      update: {
        customerId: fnCustomer.customerId ?? undefined,
        dueDate: inv.DueDate ? new Date(inv.DueDate) : null,
        totalExclVat: inv.Net != null ? parseFloat(inv.Net) : null,
        totalInclVat: inv.Total != null ? parseFloat(inv.Total) : null,
        vat: inv.TotalVAT != null ? parseFloat(inv.TotalVAT) : null,
        status,
        ourReference: inv.OurReference || null,
        yourReference: inv.YourReference || null,
        rawData: nextRawData,
        syncedAt: now,
        // sentAt is intentionally omitted — only the WebSocket bookkeep event
        // (fortnoxWebSocket.ts) may update this field on existing rows.
      },
    });

    invoiceCount++;
  }

  // ── Update sync log ────────────────────────────────────────────────────────
  // fortnox_sync_log.company_id references the companies table inside the
  // per-company DB (same UUID as the master company id).
  const companyRow = await client.company.findFirst({ select: { id: true } });
  if (companyRow) {
    for (const resource of ["customers", "invoices"] as const) {
      await client.fortnoxSyncLog.upsert({
        where: { companyId_resource: { companyId: companyRow.id, resource } },
        create: { companyId: companyRow.id, resource, lastSyncedAt: now },
        update: { lastSyncedAt: now },
      });
    }
  }

  console.log(
    `[syncFortnoxData] Company ${companyId}: ${customerCount} customers, ${invoiceCount} invoices synced.`,
  );
  return { customers: customerCount, invoices: invoiceCount };
}

/**
 * Fetch and upsert invoice line rows for a single invoice.
 * Call this on-demand (e.g. when opening an invoice detail view) rather than
 * during the bulk sync to avoid rate-limiting.
 */
export async function syncFortnoxInvoiceRows(
  companyId: string,
  invoiceNumber: string,
): Promise<number> {
  const company = await masterClient.company.findUnique({
    where: { id: companyId },
  });
  if (!company) throw new Error(`Company not found: ${companyId}`);

  const data = await fetchFortnoxForCompany(
    companyId,
    `/invoices/${invoiceNumber}`,
  );
  const inv = data?.Invoice ?? data;
  const rows: any[] = inv?.InvoiceRows ?? [];

  const client = getCompanyClient(company.dbName);
  const headerNow = new Date();
  const existingHeader = await client.fortnoxInvoice.findUnique({
    where: { invoiceNumber },
    select: { sentAt: true },
  });

  // Single-invoice GET is authoritative for `Booked` when the list omits it.
  // Prefer precision over placeholders: replace sentAt if it's missing or
  // looks like a date-only fallback (00:00:00 on invoice date).
  if (isFortnoxInvoiceBooked(inv)) {
    const sentAt = resolveBookedAtFromRest(inv);
    const canImproveSentAt =
      sentAt &&
      (!existingHeader?.sentAt || isLikelyDateOnlyFallback(existingHeader.sentAt, inv));

    await client.fortnoxInvoice.updateMany({
      where: { invoiceNumber },
      data: {
        rawData: inv,
        syncedAt: headerNow,
        ...(canImproveSentAt ? { sentAt } : {}),
      },
    });
  } else {
    await client.fortnoxInvoice.updateMany({
      where: { invoiceNumber },
      data: { rawData: inv, syncedAt: headerNow },
    });
  }

  // Delete stale rows first so re-sync is always clean
  await client.fortnoxInvoiceRow.deleteMany({ where: { invoiceNumber } });

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    await client.fortnoxInvoiceRow.create({
      data: {
        invoiceNumber,
        rowNumber: row.RowId ?? i + 1,
        articleNumber: row.ArticleNumber || null,
        description: row.Description || null,
        quantity:
          row.DeliveredQuantity != null
            ? parseFloat(row.DeliveredQuantity)
            : null,
        price: row.Price != null ? parseFloat(row.Price) : null,
        vatPercent: row.VAT != null ? parseFloat(row.VAT) : null,
        total: row.Total != null ? parseFloat(row.Total) : null,
      },
    });
  }

  return rows.length;
}

const DETAIL_CONCURRENCY = 5;
/**
 * Incrementally sync invoice rows for all invoices that have no rows yet.
 * Designed to run after syncFortnoxData() in the scheduler.
 */
export async function syncAllInvoiceDetails(
  companyId: string,
): Promise<number> {
  const company = await masterClient.company.findUnique({
    where: { id: companyId },
  });
  if (!company) throw new Error(`Company not found: ${companyId}`);

  const client = getCompanyClient(company.dbName);

  // Only fetch invoices that have zero rows — skips already-synced ones
  const pending = await client.fortnoxInvoice.findMany({
    where: { rows: { none: {} } },
    select: { invoiceNumber: true },
    orderBy: { invoiceDate: "desc" }, // newest first — most likely to be viewed
  });

  if (pending.length === 0) return 0;

  console.log(
    `[syncAllInvoiceDetails] ${pending.length} invoices need detail sync for company ${companyId}`,
  );

  let synced = 0;
  const numbers = pending.map((i) => i.invoiceNumber);

  for (let i = 0; i < numbers.length; i += DETAIL_CONCURRENCY) {
    const chunk = numbers.slice(i, i + DETAIL_CONCURRENCY);
    await Promise.all(
      chunk.map(async (num) => {
        try {
          await syncFortnoxInvoiceRows(companyId, num);
          synced++;
        } catch (err) {
          console.error(
            `[syncAllInvoiceDetails] Failed for invoice ${num}:`,
            err,
          );
          // Continue — don't abort the whole batch on one failure
        }
      }),
    );
  }
  return synced;
}
