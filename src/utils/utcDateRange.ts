const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Validates `YYYY-MM-DD` and that it is a real calendar day (UTC). */
export function parseIsoDateOrThrow(isoDate: string): void {
  if (!ISO_DATE.test(isoDate)) {
    throw new Error(
      `Invalid date format: expected YYYY-MM-DD, got "${isoDate}"`,
    );
  }
  const [y, m, d] = isoDate.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d));
  if (
    t.getUTCFullYear() !== y ||
    t.getUTCMonth() !== m - 1 ||
    t.getUTCDate() !== d
  ) {
    throw new Error(`Invalid calendar date: "${isoDate}"`);
  }
}

/** UTC calendar day [start, endExclusive) for filtering. */
export function utcDayBounds(isoDate: string): { start: Date; endExclusive: Date } {
  const [y, m, d] = isoDate.split("-").map(Number);
  const start = new Date(Date.UTC(y, m - 1, d, 0, 0, 0, 0));
  const endExclusive = new Date(start);
  endExclusive.setUTCDate(endExclusive.getUTCDate() + 1);
  return { start, endExclusive };
}

/**
 * Inclusive UTC date range [fromDate, toDate] as half-open [start, endExclusive).
 */
export function utcInclusiveDayRange(
  fromDate: string,
  toDate: string,
): { start: Date; endExclusive: Date } {
  parseIsoDateOrThrow(fromDate);
  parseIsoDateOrThrow(toDate);
  const start = utcDayBounds(fromDate).start;
  const endExclusive = utcDayBounds(toDate).endExclusive;
  if (start.getTime() >= endExclusive.getTime()) {
    throw new Error(
      `fromDate must be on or before toDate: "${fromDate}" > "${toDate}"`,
    );
  }
  return { start, endExclusive };
}
