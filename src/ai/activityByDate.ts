import { getCompanyClient } from "../DATABASE/connectionManager";
import { parseIsoDateOrThrow, utcDayBounds } from "../utils/utcDateRange";

const MAX_VOUCHERS = 50;
const MAX_INVOICES = 50;
const MAX_TIME_ENTRIES = 50;
const MAX_EMAILS = 30;
const MAX_EMAIL_ACTIVITY = 50;
const BODY_PREVIEW_LEN = 500;

export type ActivityForDateResult = {
  date: string;
  timeZoneNote: string;
  vouchers: Array<{
    id: string;
    voucherSeries: string;
    voucherNumber: number;
    transactionDate: string;
    description: string | null;
  }>;
  invoices: Array<{
    invoiceNumber: string;
    customerNumber: string;
    invoiceDate: string;
    dueDate: string | null;
    totalInclVat: number | null;
    status: string | null;
    rowSummary: string;
  }>;
  timeEntries: Array<{
    id: string;
    date: string;
    hours: number;
    description: string | null;
    userEmail: string | null;
    rawCustomerName: string | null;
  }>;
  emails: Array<{
    id: string;
    subject: string | null;
    fromAddress: string;
    sentAt: string | null;
    direction: string;
    bodyPreview: string | null;
  }>;
  emailActivities: Array<{
    id: string;
    sentAt: string;
    recipientEmail: string;
    subject: string | null;
  }>;
  truncated: {
    vouchers: boolean;
    invoices: boolean;
    timeEntries: boolean;
    emails: boolean;
    emailActivities: boolean;
  };
};

function truncateText(s: string | null | undefined, max: number): string | null {
  if (s == null || s === "") return null;
  if (s.length <= max) return s;
  return s.slice(0, max) + "…";
}

/**
 * Loads activity for one calendar day (UTC). Dates in Postgres @db.Date and
 * timestamptz filters use the same UTC window.
 */
export async function lookupActivityForDate(
  dbName: string,
  isoDate: string,
): Promise<ActivityForDateResult> {
  parseIsoDateOrThrow(isoDate);
  const { start, endExclusive } = utcDayBounds(isoDate);
  const client = getCompanyClient(dbName);

  const [
    voucherRows,
    invoiceRows,
    timeRows,
    emailRows,
    activityRows,
    voucherTotal,
    invoiceTotal,
    timeTotal,
    emailTotal,
    activityTotal,
  ] = await Promise.all([
    client.fortnoxVoucher.findMany({
      where: {
        transactionDate: { gte: start, lt: endExclusive },
      },
      orderBy: [{ voucherSeries: "asc" }, { voucherNumber: "asc" }],
      take: MAX_VOUCHERS,
    }),
    client.fortnoxInvoice.findMany({
      where: {
        OR: [
          { invoiceDate: { gte: start, lt: endExclusive } },
          {
            dueDate: { gte: start, lt: endExclusive },
          },
        ],
      },
      orderBy: { invoiceDate: "desc" },
      take: MAX_INVOICES,
      include: { rows: { take: 15, orderBy: { rowNumber: "asc" } } },
    }),
    client.timeEntry.findMany({
      where: {
        date: { gte: start, lt: endExclusive },
      },
      orderBy: { createdAt: "desc" },
      take: MAX_TIME_ENTRIES,
      include: { user: { select: { email: true } } },
    }),
    client.email.findMany({
      where: {
        sentAt: { gte: start, lt: endExclusive },
      },
      orderBy: { sentAt: "desc" },
      take: MAX_EMAILS,
      select: {
        id: true,
        subject: true,
        fromAddress: true,
        sentAt: true,
        direction: true,
        bodyText: true,
      },
    }),
    client.emailActivity.findMany({
      where: {
        sentAt: { gte: start, lt: endExclusive },
      },
      orderBy: { sentAt: "desc" },
      take: MAX_EMAIL_ACTIVITY,
    }),
    client.fortnoxVoucher.count({
      where: {
        transactionDate: { gte: start, lt: endExclusive },
      },
    }),
    client.fortnoxInvoice.count({
      where: {
        OR: [
          { invoiceDate: { gte: start, lt: endExclusive } },
          { dueDate: { gte: start, lt: endExclusive } },
        ],
      },
    }),
    client.timeEntry.count({
      where: {
        date: { gte: start, lt: endExclusive },
      },
    }),
    client.email.count({
      where: {
        sentAt: { gte: start, lt: endExclusive },
      },
    }),
    client.emailActivity.count({
      where: {
        sentAt: { gte: start, lt: endExclusive },
      },
    }),
  ]);

  return {
    date: isoDate,
    timeZoneNote:
      "Dates are interpreted in UTC for filtering. Mention this if the user might expect local timezone.",
    vouchers: voucherRows.map((r) => ({
      id: r.id,
      voucherSeries: r.voucherSeries,
      voucherNumber: r.voucherNumber,
      transactionDate: r.transactionDate.toISOString(),
      description: r.description,
    })),
    invoices: invoiceRows.map((inv) => ({
      invoiceNumber: inv.invoiceNumber,
      customerNumber: inv.customerNumber,
      invoiceDate: inv.invoiceDate.toISOString(),
      dueDate: inv.dueDate?.toISOString() ?? null,
      totalInclVat:
        inv.totalInclVat != null ? Number(inv.totalInclVat) : null,
      status: inv.status,
      rowSummary: inv.rows
        .map(
          (row) =>
            `${row.description ?? "(no desc)"} qty ${row.quantity ?? "?"} total ${row.total != null ? Number(row.total) : "?"}`,
        )
        .join("; "),
    })),
    timeEntries: timeRows.map((t) => ({
      id: t.id,
      date: t.date.toISOString(),
      hours: Number(t.hours),
      description: t.description,
      userEmail: t.user?.email ?? null,
      rawCustomerName: t.rawCustomerName,
    })),
    emails: emailRows.map((e) => ({
      id: e.id,
      subject: e.subject,
      fromAddress: e.fromAddress,
      sentAt: e.sentAt?.toISOString() ?? null,
      direction: e.direction,
      bodyPreview: truncateText(e.bodyText, BODY_PREVIEW_LEN),
    })),
    emailActivities: activityRows.map((a) => ({
      id: a.id,
      sentAt: a.sentAt.toISOString(),
      recipientEmail: a.recipientEmail,
      subject: a.subject,
    })),
    truncated: {
      vouchers: voucherTotal > MAX_VOUCHERS,
      invoices: invoiceTotal > MAX_INVOICES,
      timeEntries: timeTotal > MAX_TIME_ENTRIES,
      emails: emailTotal > MAX_EMAILS,
      emailActivities: activityTotal > MAX_EMAIL_ACTIVITY,
    },
  };
}
