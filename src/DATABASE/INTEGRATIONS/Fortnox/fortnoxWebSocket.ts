import WebSocket from 'ws';
import { masterClient } from '../../masterpool';
import { getCompanyClient } from '../../connectionManager';
import { connectFortnox, refreshFortnoxToken } from './fortnoxConnect';
import { updateTokens } from '../insertTokensFunc';
import {
  deriveInvoiceStatus,
  isFortnoxInvoiceBooked,
  resolveFortnoxBookedAt,
} from './syncFortnoxData';

const WS_URL = 'wss://ws.fortnox.se/topics-v1';
const RECONNECT_DELAY_MS = 5_000;

// Per-company refresh lock: companyId → in-flight refresh promise
// Ensures only one refresh runs at a time per company, preventing invalid_grant
// when both addTenants() and connectFortnox() try to refresh the same token.
const refreshLocks = new Map<string, Promise<void>>();

async function withRefreshLock(companyId: string, fn: () => Promise<void>): Promise<void> {
  const existing = refreshLocks.get(companyId);
  if (existing) {
    // Another refresh is already in flight — wait for it, then re-read fresh tokens from DB
    await existing.catch(() => {});
    return;
  }
  const p = fn().finally(() => refreshLocks.delete(companyId));
  refreshLocks.set(companyId, p);
  await p;
}

// companyId:invoiceNumber → in-flight handleInvoiceUpdated (dedupes invoice-updated + invoice-bookkeep)
const invoiceUpdateLocks = new Map<string, Promise<void>>();

async function withInvoiceUpdateLock(key: string, fn: () => Promise<void>): Promise<void> {
  const existing = invoiceUpdateLocks.get(key);
  if (existing) {
    await existing.catch(() => {});
    return;
  }
  const p = fn().finally(() => invoiceUpdateLocks.delete(key));
  invoiceUpdateLocks.set(key, p);
  await p;
}

// tenantId → companyId, rebuilt on every add-tenants-v1 response
const tenantToCompany = new Map<string, string>();

// token (without "Bearer ") → companyId, rebuilt on every connect
const pendingTokenToCompany = new Map<string, string>();

// topic → last seen offset, used for event replay on reconnect (14-day window)
const lastOffsets = new Map<string, string>();

let ws: WebSocket | null = null;
let stopping = false;
let heartbeatInterval: ReturnType<typeof setInterval> | null = null;

// ─────────────────────────────────────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────────────────────────────────────

export async function startFortnoxWebSocket(): Promise<void> {
  stopping = false;
  connect();
}

export function stopFortnoxWebSocket(): void {
  stopping = true;
  if (heartbeatInterval) clearInterval(heartbeatInterval);
  ws?.close();
}

// ─────────────────────────────────────────────────────────────────────────────
// Connection lifecycle
// ─────────────────────────────────────────────────────────────────────────────

function connect(): void {
  ws = new WebSocket(WS_URL);

  ws.on('open', () => {
    console.log('[Fortnox WS] Connected');

    // Send a ping every 30 seconds to keep the connection alive
    if (heartbeatInterval) clearInterval(heartbeatInterval);
    heartbeatInterval = setInterval(() => {
      if (ws?.readyState === WebSocket.OPEN) {
        ws.ping();
      }
    }, 30_000);

    addTenants().catch((err) =>
      console.error('[Fortnox WS] addTenants error:', err),
    );
  });

  ws.on('message', (raw) => {
    try {
      const msg = JSON.parse(raw.toString());
      console.log('[Fortnox WS] RAW MSG:', JSON.stringify(msg));
      handleMessage(msg);
    } catch (err) {
      console.error('[Fortnox WS] Failed to parse message:', err);
    }
  });

  ws.on('close', (code, reason) => {
    if (heartbeatInterval) { clearInterval(heartbeatInterval); heartbeatInterval = null; }
    if (!stopping) {
      console.warn(
        `[Fortnox WS] Disconnected (code=${code} reason=${reason?.toString()}). Reconnecting in ${RECONNECT_DELAY_MS}ms…`,
      );
      setTimeout(connect, RECONNECT_DELAY_MS);
    }
  });

  ws.on('error', (err) => {
    console.error('[Fortnox WS] Socket error:', err);
  });
}

function send(payload: object): void {
  if (ws?.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(payload));
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Commands
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Read all Fortnox integrations from the DB and register every company's
 * access token in a single add-tenants-v1 command. Re-reading from the DB
 * each time ensures reconnects pick up any tokens refreshed since last connect.
 */
async function addTenants(): Promise<void> {
  pendingTokenToCompany.clear();

  const companies = await masterClient.company.findMany();
  const accessTokens: string[] = [];

  // Refresh tokens that are expired or expiring within the next 5 minutes
  const refreshThreshold = new Date(Date.now() + 5 * 60 * 1000);

  for (const company of companies) {
    let integration = await getCompanyClient(
      company.dbName,
    ).companyIntegration.findFirst({
      where: { service: { equals: 'fortnox', mode: 'insensitive' } },
      orderBy: { expiresAt: 'desc' },
    });
    if (!integration?.accessToken) continue;

    // Proactively refresh if token is expired or about to expire
    if (integration.refreshToken && (!integration.expiresAt || integration.expiresAt <= refreshThreshold)) {
      await withRefreshLock(company.id, async () => {
        // Re-read after acquiring lock — another caller may have already refreshed
        const fresh = await getCompanyClient(company.dbName).companyIntegration.findFirst({
          where: { service: { equals: 'fortnox', mode: 'insensitive' } },
          orderBy: { expiresAt: 'desc' },
        });
        if (!fresh?.refreshToken) return;
        // If fresh token is now valid, skip refresh
        if (fresh.expiresAt && fresh.expiresAt > refreshThreshold) {
          integration = fresh;
          return;
        }
        try {
          const newTokens = await refreshFortnoxToken(fresh.refreshToken);
          await updateTokens(company.id, 'Fortnox', {
            access_token: newTokens.access_token,
            refresh_token: newTokens.refresh_token,
            expires_at: newTokens.expires_at,
          });
          integration = { ...fresh, accessToken: newTokens.access_token };
          console.log(`[Fortnox WS] Refreshed token for company ${company.name}`);
        } catch (err) {
          console.error(`[Fortnox WS] Failed to refresh token for company ${company.name}:`, err);
          integration = null as any; // mark as unusable
        }
      });
      if (!integration?.accessToken) continue;
    }

    accessTokens.push(`Bearer ${integration.accessToken}`);
    pendingTokenToCompany.set(integration.accessToken, company.id);
  }

  if (accessTokens.length === 0) {
    console.warn('[Fortnox WS] No Fortnox integrations found, not subscribing.');
    return;
  }

  send({
    command: 'add-tenants-v1',
    includeChildTenants: false,
    clientSecret: process.env.FORTNOX_CLIENT_SECRET,
    accessTokens,
  });
}

/**
 * Subscribe to the invoices topic. Called after tenants are successfully added.
 * Supplies the last seen offset so missed events (up to 14 days) are replayed.
 */
function subscribeToInvoices(): void {
  const offset = lastOffsets.get('invoices');
  send({
    command: 'add-topics-v1',
    topics: [
      {
        topic: 'invoices',
        ...(offset ? { offset } : {}),
      },
    ],
  });
}

function startSubscription(): void {
  send({ command: 'subscribe-v1' });
}

// ─────────────────────────────────────────────────────────────────────────────
// Message handling
// ─────────────────────────────────────────────────────────────────────────────

function handleMessage(msg: any): void {
  // Response to add-tenants-v1
  if (msg.response === 'add-tenants-v1') {
    if (msg.result === 'error') {
      console.error('[Fortnox WS] add-tenants-v1 error:', msg.invalidTokens);
      return;
    }

    // Map tenantId → companyId using the token lookup we built in addTenants()
    tenantToCompany.clear();
    for (const [bearerToken, tenantId] of Object.entries(
      msg.tenantIds as Record<string, number | string>,
    )) {
      const rawToken = bearerToken.replace(/^Bearer /, '');
      const companyId = pendingTokenToCompany.get(rawToken);
      if (companyId) {
        tenantToCompany.set(String(tenantId), companyId);
      }
    }

    console.log(
      `[Fortnox WS] ${tenantToCompany.size} tenant(s) registered, subscribing to invoices…`,
    );
    subscribeToInvoices();
    return;
  }

  // Response to add-topics-v1
  if (msg.response === 'add-topics-v1') {
    if (msg.result === 'error') {
      console.error('[Fortnox WS] add-topics-v1 error:', msg.invalidTopics);
      return;
    }
    console.log('[Fortnox WS] Topics added, starting subscription…');
    startSubscription();
    return;
  }

  // Response to subscribe-v1
  if (msg.response === 'subscribe-v1') {
    if (msg.result === 'error') {
      console.error('[Fortnox WS] subscribe-v1 error:', msg);
      return;
    }
    console.log('[Fortnox WS] Subscribed — live events active.');
    return;
  }

  // Live event
  if (msg.topic && msg.type && msg.tenantId != null) {
    // Always advance the offset so reconnects replay from here
    if (msg.offset) {
      lastOffsets.set(msg.topic, msg.offset);
    }

    // invoice-bookkeep-v1: invoice bokförd — `sent_at` används som bokförings-tidsstämpel.
    if (msg.topic === 'invoices' && msg.type === 'invoice-bookkeep-v1') {
      const companyId = tenantToCompany.get(String(msg.tenantId));
      if (companyId) {
        handleInvoiceUpdated(companyId, msg as FortnoxWsEvent).catch((err) =>
          console.error('[Fortnox WS] handleInvoiceUpdated error:', err),
        );
      }
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Fortnox bookkeep → `sent_at` (kolumnen lagrar bokföringstid)
// ─────────────────────────────────────────────────────────────────────────────

interface FortnoxWsEvent {
  entityId: string | number; // DocumentNumber (JSON may deliver a number)
  timestamp?: string; // ISO 8601 with tz when present on the wire
  Timestamp?: string;
  offset: string;
  type?: string; // e.g. invoice-updated-v1, invoice-bookkeep-v1
  [key: string]: unknown;
}

/** Collect datetime strings Fortnox may attach to WS events (casing varies). */
function collectWsTimestampCandidates(evt: FortnoxWsEvent): string[] {
  const keys = [
    'timestamp',
    'Timestamp',
    'eventTime',
    'EventTime',
    'created',
    'Created',
    'time',
    'Time',
  ];
  const out: string[] = [];
  for (const k of keys) {
    const v = evt[k];
    if (typeof v === 'string' && v.trim()) out.push(v.trim());
  }
  return out;
}

/** Fortnox WS kan komma före GET /invoices/{id} visar Booked=true. */
const REST_BOOKED_RETRY_DELAYS_MS = [500, 1_200, 2_500] as const;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handleInvoiceUpdated(
  companyId: string,
  event: FortnoxWsEvent,
): Promise<void> {
  const invoiceNumber = String(event.entityId);
  const lockKey = `${companyId}:${invoiceNumber}`;
  await withInvoiceUpdateLock(lockKey, () => handleInvoiceUpdatedDeduped(companyId, event, invoiceNumber));
}

async function handleInvoiceUpdatedDeduped(
  companyId: string,
  event: FortnoxWsEvent,
  invoiceNumber: string,
): Promise<void> {
  /** Log correlation only — booked timestamps use `persistedAt` after REST confirms Booked. */
  const wsReceivedAt = new Date();
  const wsTimeCandidates = collectWsTimestampCandidates(event);

  const company = await masterClient.company.findUnique({
    where: { id: companyId },
  });
  if (!company) return;

  const client = getCompanyClient(company.dbName);

  // Skip if vi redan har bokförings-tid — undviker dubbla REST-anrop
  const existing = await client.fortnoxInvoice.findUnique({
    where: { invoiceNumber },
    select: { sentAt: true },
  });
  if (existing?.sentAt) {
    console.log(`[Fortnox WS] Invoice ${invoiceNumber}: sent_at (booked) already set, skipping.`);
    return;
  }
  console.log(
    `[Fortnox WS] Invoice ${invoiceNumber}: invoice-bookkeep-v1 → fetching REST to confirm Booked…`,
  );

  // Uppföljande REST-anrop: WS-händelsen innehåller inte Booked
  const integration = await client.companyIntegration.findFirst({
    where: { service: { equals: 'fortnox', mode: 'insensitive' } },
    orderBy: { expiresAt: 'desc' },
  });
  if (!integration) {
    console.error(`[Fortnox WS] Invoice ${invoiceNumber}: no integration found for company ${companyId}`);
    return;
  }

  const onRefresh = async (newTokens: {
    access_token: string;
    refresh_token?: string;
    expires_at?: string;
  }) => {
    await withRefreshLock(companyId, async () => {
      try {
        await updateTokens(companyId, 'Fortnox', {
          access_token: newTokens.access_token,
          refresh_token: newTokens.refresh_token,
          expires_at: newTokens.expires_at,
        });
      } catch (err) {
        console.warn(
          '[Fortnox WS] Failed to persist refreshed tokens for company',
          companyId,
          err,
        );
      }
    });
  };

  const fetchInvoice = () =>
    connectFortnox(
      integration.accessToken,
      integration.refreshToken ?? undefined,
      `/invoices/${invoiceNumber}`,
      onRefresh,
    );

  let data = await fetchInvoice();
  for (let r = 0; r < REST_BOOKED_RETRY_DELAYS_MS.length && !isFortnoxInvoiceBooked(data?.Invoice); r++) {
    const wait = REST_BOOKED_RETRY_DELAYS_MS[r];
    console.log(
      `[Fortnox WS] Invoice ${invoiceNumber}: Booked still false, retry ${r + 1}/${REST_BOOKED_RETRY_DELAYS_MS.length} in ${wait}ms…`,
      `(wsCandidates=${JSON.stringify(wsTimeCandidates)} wsReceivedAt=${wsReceivedAt.toISOString()})`,
    );
    await sleep(wait);
    data = await fetchInvoice();
  }

  const inv = data?.Invoice;
  if (!inv) {
    console.warn(`[Fortnox WS] Invoice ${invoiceNumber}: no Invoice object in REST response`);
    return;
  }

  const inv0 = inv;
  console.log(
    `[Fortnox WS] Invoice ${invoiceNumber}: REST Booked=${inv0.Booked ?? inv0.booked} Sent=${inv0.Sent} wsCandidates=${JSON.stringify(wsTimeCandidates)} wsReceivedAt=${wsReceivedAt.toISOString()}`,
  );
  if (!isFortnoxInvoiceBooked(inv)) {
    console.log(
      `[Fortnox WS] Invoice ${invoiceNumber}: REST still Booked=false after ${1 + REST_BOOKED_RETRY_DELAYS_MS.length} attempt(s).`,
    );
    return;
  }

  /** Single clock anchor for DB writes — avoids sent_at trailing synced_at/created_at by hundreds of ms. */
  const persistedAt = new Date();
  const bookedAt = resolveFortnoxBookedAt(
    inv,
    wsTimeCandidates.length > 0 ? wsTimeCandidates : null,
    persistedAt,
  );
  const customerNumber = String(inv.CustomerNumber ?? '').trim();

  // Ensure the fortnox_customer row exists so the FK is satisfiable
  const fnCustomer = customerNumber
    ? await client.fortnoxCustomer.findUnique({
        where: { customerNumber },
        select: { customerId: true },
      })
    : null;

  // Upsert the invoice — creates it if missing (e.g. created after last sync)
  await client.fortnoxInvoice.upsert({
    where: { invoiceNumber },
    create: {
      invoiceNumber,
      customerNumber,
      customerId: fnCustomer?.customerId ?? null,
      invoiceDate: inv.InvoiceDate ? new Date(inv.InvoiceDate) : persistedAt,
      dueDate: inv.DueDate ? new Date(inv.DueDate) : null,
      totalExclVat: inv.Net != null ? parseFloat(inv.Net) : null,
      totalInclVat: inv.Total != null ? parseFloat(inv.Total) : null,
      vat: inv.TotalVAT != null ? parseFloat(inv.TotalVAT) : null,
      currency: inv.Currency || 'SEK',
      status: deriveInvoiceStatus(inv),
      ourReference: inv.OurReference || null,
      yourReference: inv.YourReference || null,
      rawData: inv,
      createdAt: persistedAt,
      syncedAt: persistedAt,
      sentAt: bookedAt,
    },
    update: {
      status: deriveInvoiceStatus(inv),
      rawData: inv,
      syncedAt: persistedAt,
      sentAt: bookedAt,
    },
  });

  console.log(
    `[Fortnox WS] Invoice ${invoiceNumber} (company ${companyId}) booked_at → sent_at=${bookedAt.toISOString()}`,
  );
}
