import { masterClient } from '../../masterpool';
import { getCompanyClient } from '../../connectionManager';
import fetchFortnoxForCompany from './fortnoxData';

const PAGE_SIZE = 500; // Fortnox max page size

/**
 * Fetch all pages of a paginated Fortnox list endpoint.
 * Fortnox returns MetaInformation['@TotalPages'] to signal how many pages exist.
 */
async function fetchAllPages(companyId: string, resource: string): Promise<any[]> {
  const results: any[] = [];
  let page = 1;

  while (true) {
    const data = await fetchFortnoxForCompany(
      companyId,
      `/${resource}?page=${page}&limit=${PAGE_SIZE}`
    );
    // The array is always under the PascalCase resource key, e.g. "Customers" or "Invoices"
    const rootKey = Object.keys(data).find((k) => Array.isArray(data[k]));
    const items: any[] = rootKey ? data[rootKey] : [];
    results.push(...items);

    const totalPages: number = data?.MetaInformation?.['@TotalPages'] ?? 1;
    if (page >= totalPages) break;
    page++;
  }

  return results;
}

function deriveInvoiceStatus(inv: any): string {
  if (inv.Cancelled) return 'cancelled';
  if (Number(inv.Balance ?? inv.Total) === 0) return 'paid';
  if (inv.DueDate && new Date(inv.DueDate) < new Date()) return 'overdue';
  return 'unpaid';
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
  const company = await masterClient.company.findUnique({ where: { id: companyId } });
  if (!company) throw new Error(`Company not found: ${companyId}`);

  const client = getCompanyClient(company.dbName);
  const now = new Date();

  // ── Customers ─────────────────────────────────────────────────────────────
  const rawCustomers = await fetchAllPages(companyId, 'customers');
  let customerCount = 0;

  for (const c of rawCustomers) {
    const customerNumber = String(c.CustomerNumber ?? '').trim();
    if (!customerNumber) continue;

    // Try to find a matching internal customer row
    const internalCustomer = await client.customer.findFirst({
      where: {
        OR: [
          { fortnoxCustomerNumber: customerNumber },
          { name: c.Name },
        ],
      },
      select: { id: true },
    });

    await client.fortnoxCustomer.upsert({
      where: { customerNumber },
      create: {
        customerNumber,
        customerId: internalCustomer?.id ?? null,
        name: c.Name ?? '',
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

    // Keep the internal customer's fortnox_customer_number in sync
    if (internalCustomer) {
      await client.customer.update({
        where: { id: internalCustomer.id },
        data: { fortnoxCustomerNumber: customerNumber },
      });
    }

    customerCount++;
  }

  // ── Invoices (headers only) ────────────────────────────────────────────────
  const rawInvoices = await fetchAllPages(companyId, 'invoices');
  let invoiceCount = 0;

  for (const inv of rawInvoices) {
    const invoiceNumber = String(inv.DocumentNumber ?? '').trim();
    const customerNumber = String(inv.CustomerNumber ?? '').trim();
    if (!invoiceNumber || !customerNumber) continue;

    // Ensure the fortnox_customer row exists before inserting the invoice FK
    const fnCustomer = await client.fortnoxCustomer.findUnique({
      where: { customerNumber },
      select: { customerId: true },
    });
    if (!fnCustomer) continue;

    const status = deriveInvoiceStatus(inv);

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
        currency: inv.Currency || 'SEK',
        status,
        ourReference: inv.OurReference || null,
        yourReference: inv.YourReference || null,
        rawData: inv,
        syncedAt: now,
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
        rawData: inv,
        syncedAt: now,
      },
    });

    invoiceCount++;
  }

  // ── Update sync log ────────────────────────────────────────────────────────
  // fortnox_sync_log.company_id references the companies table inside the
  // per-company DB (same UUID as the master company id).
  const companyRow = await client.company.findFirst({ select: { id: true } });
  if (companyRow) {
    for (const resource of ['customers', 'invoices'] as const) {
      await client.fortnoxSyncLog.upsert({
        where: { companyId_resource: { companyId: companyRow.id, resource } },
        create: { companyId: companyRow.id, resource, lastSyncedAt: now },
        update: { lastSyncedAt: now },
      });
    }
  }

  console.log(`[syncFortnoxData] Company ${companyId}: ${customerCount} customers, ${invoiceCount} invoices synced.`);
  return { customers: customerCount, invoices: invoiceCount };
}

/**
 * Fetch and upsert invoice line rows for a single invoice.
 * Call this on-demand (e.g. when opening an invoice detail view) rather than
 * during the bulk sync to avoid rate-limiting.
 */
export async function syncFortnoxInvoiceRows(
  companyId: string,
  invoiceNumber: string
): Promise<number> {
  const company = await masterClient.company.findUnique({ where: { id: companyId } });
  if (!company) throw new Error(`Company not found: ${companyId}`);

  const data = await fetchFortnoxForCompany(companyId, `/invoices/${invoiceNumber}`);
  const inv = data?.Invoice ?? data;
  const rows: any[] = inv?.InvoiceRows ?? [];

  const client = getCompanyClient(company.dbName);

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
        quantity: row.DeliveredQuantity != null ? parseFloat(row.DeliveredQuantity) : null,
        price: row.Price != null ? parseFloat(row.Price) : null,
        vatPercent: row.VAT != null ? parseFloat(row.VAT) : null,
        total: row.Total != null ? parseFloat(row.Total) : null,
      },
    });
  }

  return rows.length;
}
