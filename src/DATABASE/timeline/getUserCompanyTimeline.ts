import { getCompanyClient } from "../connectionManager";
import { utcInclusiveDayRange } from "../../utils/utcDateRange";
import {
  TimelineEvent,
  TimelineEventKind,
} from "../../__generated__/resolvers-types";

const DEFAULT_LIMIT = 100;
const MAX_LIMIT = 500;

function internalFetchCap(limit: number): number {
  return Math.min(Math.max(limit, 1) * 3, MAX_LIMIT);
}

function compareOccurrenceDesc(a: string, b: string): number {
  if (a === b) return 0;
  return a < b ? 1 : -1;
}

/**
 * Merged timeline: sent mail + email_activity for `userId`, plus company-wide
 * Fortnox vouchers in `transactionDate` range. Dates are UTC calendar days
 * [fromDate, toDate] inclusive.
 *
 * Dedupe: if EmailActivity shares `messageId` with a row from Email, only the
 * Email row is kept (richer storage).
 */
export async function getUserCompanyTimeline(
  dbName: string,
  args: {
    userId: string;
    fromDate: string;
    toDate: string;
    limit?: number;
  },
): Promise<TimelineEvent[]> {
  const limit = Math.min(
    args.limit ?? DEFAULT_LIMIT,
    MAX_LIMIT,
  );
  const cap = internalFetchCap(limit);
  const { start, endExclusive } = utcInclusiveDayRange(
    args.fromDate,
    args.toDate,
  );
  const client = getCompanyClient(dbName);

  const [emailRows, activityRows, voucherRows] = await Promise.all([
    client.email.findMany({
      where: {
        userId: args.userId,
        direction: "sent",
        sentAt: { gte: start, lt: endExclusive },
      },
      orderBy: { sentAt: "desc" },
      take: cap,
      select: {
        id: true,
        subject: true,
        messageId: true,
        fromAddress: true,
        sentAt: true,
      },
    }),
    client.emailActivity.findMany({
      where: {
        userId: args.userId,
        sentAt: { gte: start, lt: endExclusive },
      },
      orderBy: { sentAt: "desc" },
      take: cap,
      select: {
        id: true,
        subject: true,
        recipientEmail: true,
        messageId: true,
        sentAt: true,
      },
    }),
    client.fortnoxVoucher.findMany({
      where: {
        transactionDate: { gte: start, lt: endExclusive },
      },
      orderBy: [{ transactionDate: "desc" }, { voucherSeries: "asc" }, { voucherNumber: "asc" }],
      take: cap,
      select: {
        id: true,
        voucherSeries: true,
        voucherNumber: true,
        transactionDate: true,
        description: true,
        financialYearId: true,
      },
    }),
  ]);

  const emailMessageIds = new Set(emailRows.map((e) => e.messageId));

  const merged: TimelineEvent[] = [];

  for (const e of emailRows) {
    if (!e.sentAt) continue;
    merged.push({
      kind: TimelineEventKind.Mail,
      occurredAt: e.sentAt.toISOString(),
      mailSent: {
        id: e.id,
        subject: e.subject,
        messageId: e.messageId,
        fromAddress: e.fromAddress,
      },
      emailActivity: null,
      fortnoxVoucher: null,
    });
  }

  for (const a of activityRows) {
    if (a.messageId && emailMessageIds.has(a.messageId)) continue;
    merged.push({
      kind: TimelineEventKind.EmailActivity,
      occurredAt: a.sentAt.toISOString(),
      mailSent: null,
      emailActivity: {
        id: a.id,
        subject: a.subject,
        recipientEmail: a.recipientEmail,
        messageId: a.messageId,
      },
      fortnoxVoucher: null,
    });
  }

  for (const v of voucherRows) {
    merged.push({
      kind: TimelineEventKind.FortnoxVoucher,
      occurredAt: v.transactionDate.toISOString(),
      mailSent: null,
      emailActivity: null,
      fortnoxVoucher: {
        id: v.id,
        voucherSeries: v.voucherSeries,
        voucherNumber: v.voucherNumber,
        transactionDate: v.transactionDate.toISOString(),
        description: v.description,
        financialYearId: v.financialYearId,
      },
    });
  }

  merged.sort((x, y) => compareOccurrenceDesc(x.occurredAt, y.occurredAt));
  return merged.slice(0, limit);
}
