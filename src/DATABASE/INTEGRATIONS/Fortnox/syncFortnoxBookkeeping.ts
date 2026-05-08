import { masterClient } from '../../masterpool';
import { getCompanyClient } from '../../connectionManager';
import fetchFortnoxForCompany from './fortnoxData';

const PAGE_SIZE = 500;

/**
 * Fetch all pages of a Fortnox endpoint.
 * Handles base paths that already contain query params (e.g. `/accounts?financialyear=1`).
 */
async function fetchAllPages(companyId: string, basePath: string): Promise<any[]> {
  const results: any[] = [];
  let page = 1;

  while (true) {
    const sep = basePath.includes('?') ? '&' : '?';
    const data = await fetchFortnoxForCompany(
      companyId,
      `${basePath}${sep}page=${page}&limit=${PAGE_SIZE}`
    );
    const rootKey = Object.keys(data).find((k) => Array.isArray(data[k]));
    const items: any[] = rootKey ? data[rootKey] : [];
    results.push(...items);

    const totalPages: number = data?.MetaInformation?.['@TotalPages'] ?? 1;
    if (page >= totalPages) break;
    page++;
  }

  return results;
}

/**
 * Sync Fortnox bookkeeping data for a given company:
 *   - fortnox_financial_years  (all years from /3/financialyears)
 *   - fortnox_accounts         (chart of accounts with balances, per year)
 *   - fortnox_vouchers         (voucher headers per year; rows included when returned)
 *
 * Updates fortnox_sync_log for each resource on completion.
 */
export async function syncFortnoxBookkeeping(companyId: string): Promise<{
  financialYears: number;
  accounts: number;
  vouchers: number;
}> {
  const company = await masterClient.company.findUnique({ where: { id: companyId } });
  if (!company) throw new Error(`Company not found: ${companyId}`);

  const client = getCompanyClient(company.dbName);
  const now = new Date();

  // ── Financial Years ──────────────────────────────────────────────────────
  const fyData = await fetchFortnoxForCompany(companyId, '/financialyears');
  const rawYears: any[] = fyData?.FinancialYears ?? fyData?.FinancialYear ?? [];

  let yearCount = 0;
  // Maps Fortnox integer year ID → internal UUID, used when linking accounts/vouchers
  const yearIdMap = new Map<number, string>();

  for (const fy of rawYears) {
    const fortnoxId = Number(fy.Id ?? fy['@id']);
    if (!fortnoxId) continue;

    const upserted = await client.fortnoxFinancialYear.upsert({
      where: { fortnoxId },
      create: {
        fortnoxId,
        fromDate: new Date(fy.FromDate),
        toDate: new Date(fy.ToDate),
        accountChartType: fy.AccountChartType || null,
        accountingMethod: fy.AccountingMethod || null,
        rawData: fy,
        syncedAt: now,
      },
      update: {
        fromDate: new Date(fy.FromDate),
        toDate: new Date(fy.ToDate),
        accountChartType: fy.AccountChartType || null,
        accountingMethod: fy.AccountingMethod || null,
        rawData: fy,
        syncedAt: now,
      },
    });

    yearIdMap.set(fortnoxId, upserted.id);
    yearCount++;
  }

  // ── Accounts (chart of accounts with balances, per financial year) ────────
  let accountCount = 0;

  for (const [fortnoxYearId, internalYearId] of yearIdMap) {
    const rawAccounts = await fetchAllPages(
      companyId,
      `/accounts?financialyear=${fortnoxYearId}`
    );

    for (const a of rawAccounts) {
      const accountNumber = Number(a.Number ?? a.AccountNumber);
      if (!accountNumber) continue;

      await client.fortnoxAccount.upsert({
        where: {
          accountNumber_financialYearId: {
            accountNumber,
            financialYearId: internalYearId,
          },
        },
        create: {
          accountNumber,
          financialYearId: internalYearId,
          description: a.Description || null,
          active: a.Active !== false,
          balanceBroughtForward: a.BalanceBroughtForward != null ? a.BalanceBroughtForward : null,
          balanceCarriedForward: a.BalanceCarriedForward != null ? a.BalanceCarriedForward : null,
          vatCode: a.VATCode || null,
          sru: a.SRU != null ? Number(a.SRU) : null,
          rawData: a,
          syncedAt: now,
        },
        update: {
          description: a.Description || null,
          active: a.Active !== false,
          balanceBroughtForward: a.BalanceBroughtForward != null ? a.BalanceBroughtForward : null,
          balanceCarriedForward: a.BalanceCarriedForward != null ? a.BalanceCarriedForward : null,
          vatCode: a.VATCode || null,
          sru: a.SRU != null ? Number(a.SRU) : null,
          rawData: a,
          syncedAt: now,
        },
      });

      accountCount++;
    }
  }

  // ── Vouchers (headers per financial year) ─────────────────────────────────
  let voucherCount = 0;

  for (const [fortnoxYearId, internalYearId] of yearIdMap) {
    const rawVouchers = await fetchAllPages(
      companyId,
      `/vouchers?financialyear=${fortnoxYearId}`
    );

    for (const v of rawVouchers) {
      const voucherSeries = String(v.VoucherSeries ?? '').trim();
      const voucherNumber = Number(v.VoucherNumber);
      if (!voucherSeries || !voucherNumber) continue;

      const upserted = await client.fortnoxVoucher.upsert({
        where: {
          voucherSeries_voucherNumber_financialYearId: {
            voucherSeries,
            voucherNumber,
            financialYearId: internalYearId,
          },
        },
        create: {
          voucherSeries,
          voucherNumber,
          financialYearId: internalYearId,
          transactionDate: new Date(v.TransactionDate),
          description: v.Description || null,
          referenceType: v.ReferenceType || null,
          referenceNumber: v.ReferenceNumber || null,
          costCenter: v.CostCenter || null,
          project: v.Project || null,
          approvalState: v.ApprovalState != null ? Number(v.ApprovalState) : null,
          rawData: v,
          syncedAt: now,
        },
        update: {
          transactionDate: new Date(v.TransactionDate),
          description: v.Description || null,
          referenceType: v.ReferenceType || null,
          referenceNumber: v.ReferenceNumber || null,
          costCenter: v.CostCenter || null,
          project: v.Project || null,
          approvalState: v.ApprovalState != null ? Number(v.ApprovalState) : null,
          rawData: v,
          syncedAt: now,
        },
      });

      // Persist VoucherRows if the list endpoint includes them
      const rows: any[] = v.VoucherRows ?? [];
      if (rows.length > 0) {
        await client.fortnoxVoucherRow.deleteMany({ where: { voucherId: upserted.id } });
        for (const row of rows) {
          await client.fortnoxVoucherRow.create({
            data: {
              voucherId: upserted.id,
              accountNumber: Number(row.Account ?? row.AccountNumber ?? 0),
              debit: row.Debit != null ? row.Debit : null,
              credit: row.Credit != null ? row.Credit : null,
              description: row.Description || null,
              costCenter: row.CostCenter || null,
              project: row.Project || null,
            },
          });
        }
      }

      voucherCount++;
    }
  }

  // ── Update sync log ──────────────────────────────────────────────────────
  const companyRow = await client.company.findFirst({ select: { id: true } });
  if (companyRow) {
    for (const resource of ['financial_years', 'accounts', 'vouchers'] as const) {
      await client.fortnoxSyncLog.upsert({
        where: { companyId_resource: { companyId: companyRow.id, resource } },
        create: { companyId: companyRow.id, resource, lastSyncedAt: now },
        update: { lastSyncedAt: now },
      });
    }
  }

  console.log(
    `[syncFortnoxBookkeeping] Company ${companyId}: ` +
      `${yearCount} financial years, ${accountCount} accounts, ${voucherCount} vouchers synced.`
  );

  return { financialYears: yearCount, accounts: accountCount, vouchers: voucherCount };
}

/**
 * Fetch and persist the rows for a single voucher on demand.
 * Call this when opening a voucher detail view rather than during bulk sync
 * to avoid rate-limiting on large datasets.
 *
 * Requires syncFortnoxBookkeeping to have been run first (the voucher header
 * and financial year must already exist in the DB).
 */
export async function syncFortnoxVoucherRows(
  companyId: string,
  voucherSeries: string,
  voucherNumber: number,
  fortnoxYearId: number
): Promise<number> {
  const company = await masterClient.company.findUnique({ where: { id: companyId } });
  if (!company) throw new Error(`Company not found: ${companyId}`);

  const data = await fetchFortnoxForCompany(
    companyId,
    `/vouchers/${voucherSeries}/${voucherNumber}?financialyear=${fortnoxYearId}`
  );

  const voucher = data?.Voucher ?? data;
  const rows: any[] = voucher?.VoucherRows ?? [];

  const client = getCompanyClient(company.dbName);

  const fyRow = await client.fortnoxFinancialYear.findUnique({
    where: { fortnoxId: fortnoxYearId },
    select: { id: true },
  });
  if (!fyRow) {
    throw new Error(
      `Financial year ${fortnoxYearId} not found — run syncFortnoxBookkeeping first`
    );
  }

  const voucherRow = await client.fortnoxVoucher.findUnique({
    where: {
      voucherSeries_voucherNumber_financialYearId: {
        voucherSeries,
        voucherNumber,
        financialYearId: fyRow.id,
      },
    },
    select: { id: true },
  });
  if (!voucherRow) {
    throw new Error(
      `Voucher ${voucherSeries}${voucherNumber} not found — run syncFortnoxBookkeeping first`
    );
  }

  await client.fortnoxVoucherRow.deleteMany({ where: { voucherId: voucherRow.id } });

  for (const row of rows) {
    await client.fortnoxVoucherRow.create({
      data: {
        voucherId: voucherRow.id,
        accountNumber: Number(row.Account ?? row.AccountNumber ?? 0),
        debit: row.Debit != null ? row.Debit : null,
        credit: row.Credit != null ? row.Credit : null,
        description: row.Description || null,
        costCenter: row.CostCenter || null,
        project: row.Project || null,
      },
    });
  }

  return rows.length;
}
