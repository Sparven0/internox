import WebSocket from 'ws';
import { masterClient } from '../../masterpool';
import { getCompanyClient } from '../../connectionManager';
import { connectFortnox, refreshFortnoxToken } from './fortnoxConnect';
import { updateTokens } from '../insertTokensFunc';
import { deriveInvoiceStatus } from './syncFortnoxData';

const WS_URL = 'wss://ws.fortnox.se/topics-v1';
const RECONNECT_DELAY_MS = 5_000;

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
      try {
        const newTokens = await refreshFortnoxToken(integration.refreshToken);
        await updateTokens(company.id, 'Fortnox', {
          access_token: newTokens.access_token,
          refresh_token: newTokens.refresh_token,
          expires_at: newTokens.expires_at,
        });
        integration = { ...integration, accessToken: newTokens.access_token };
        console.log(`[Fortnox WS] Refreshed token for company ${company.name}`);
      } catch (err) {
        console.error(`[Fortnox WS] Failed to refresh token for company ${company.name}:`, err);
        continue; // skip this company rather than send an invalid token
      }
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

    if (msg.topic === 'invoices' && msg.type === 'invoice-updated-v1') {
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
// Invoice-sent detection
// ─────────────────────────────────────────────────────────────────────────────

interface FortnoxWsEvent {
  entityId: string;   // DocumentNumber
  timestamp: string;  // ISO 8601 with tz, e.g. "2017-12-28T14:59:16.500+01:00"
  offset: string;
}

async function handleInvoiceUpdated(
  companyId: string,
  event: FortnoxWsEvent,
): Promise<void> {
  const invoiceNumber = event.entityId;

  const company = await masterClient.company.findUnique({
    where: { id: companyId },
  });
  if (!company) return;

  const client = getCompanyClient(company.dbName);

  // Skip if we already recorded a sentAt — avoids a REST call on duplicate events
  const existing = await client.fortnoxInvoice.findUnique({
    where: { invoiceNumber },
    select: { sentAt: true },
  });
  if (existing?.sentAt) return;

  // Follow-up REST call: the WS event is minimal and doesn't include the Sent flag
  const integration = await client.companyIntegration.findFirst({
    where: { service: { equals: 'fortnox', mode: 'insensitive' } },
    orderBy: { expiresAt: 'desc' },
  });
  if (!integration) return;

  const data = await connectFortnox(
    integration.accessToken,
    integration.refreshToken ?? undefined,
    `/invoices/${invoiceNumber}`,
    async (newTokens) => {
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
    },
  );

  if (!data?.Invoice?.Sent) return; // update was something else (amount, due date, …)

  // Use the WebSocket event's timestamp — not Date.now()
  const sentAt = new Date(event.timestamp);
  const inv = data.Invoice;
  const customerNumber = String(inv.CustomerNumber ?? '').trim();
  const now = new Date();

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
      invoiceDate: inv.InvoiceDate ? new Date(inv.InvoiceDate) : now,
      dueDate: inv.DueDate ? new Date(inv.DueDate) : null,
      totalExclVat: inv.Net != null ? parseFloat(inv.Net) : null,
      totalInclVat: inv.Total != null ? parseFloat(inv.Total) : null,
      vat: inv.TotalVAT != null ? parseFloat(inv.TotalVAT) : null,
      currency: inv.Currency || 'SEK',
      status: deriveInvoiceStatus(inv),
      ourReference: inv.OurReference || null,
      yourReference: inv.YourReference || null,
      rawData: inv,
      syncedAt: now,
      sentAt,
    },
    update: {
      status: deriveInvoiceStatus(inv),
      rawData: inv,
      syncedAt: now,
      sentAt,
    },
  });

  console.log(
    `[Fortnox WS] Invoice ${invoiceNumber} (company ${companyId}) marked sent at ${sentAt.toISOString()}`,
  );
}
