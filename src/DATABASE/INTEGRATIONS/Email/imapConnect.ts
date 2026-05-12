import dotenv from 'dotenv';
dotenv.config();

// use require for modules without types to avoid TS errors
const { ImapFlow } = require('imapflow');

import { getCompanyPool, getCompanyClient } from '../../connectionManager';
import { masterClient } from '../../masterpool';
import { decryptPassword } from '../../../utils/encryptPassword';
import { saveEmailsToDB, EmailToSave } from './saveEmailsToDB';

/** Strip RFC angle brackets so the same thread dedupes in `emails.message_id`. */
function normalizeMessageId(raw?: string | null): string | undefined {
  if (raw == null || String(raw).trim() === '') return undefined;
  let s = String(raw).trim();
  if (s.startsWith('<') && s.endsWith('>')) s = s.slice(1, -1);
  return s || undefined;
}

/** Gmail SV uses `[Gmail]/Skickat` — must not rely on the substring `sent` alone. */
function mailboxLooksSent(path: string): boolean {
  const p = path.toLowerCase();
  return (
    p.includes('skickat') ||
    p.includes('sent') ||
    p.includes('utgående') ||
    p.includes('utgaende')
  );
}

/**
 * When IMAP `envelope.from` lacks `mailbox`/`host` (server quirks), recover from the
 * rendered "Name <a@b>" / bare `a@b` string.
 */
function extractEmailFromFormattedHeader(line?: string): string | undefined {
  if (!line || !String(line).trim()) return undefined;
  const s = String(line);
  const bracketed = s.match(/<([^<>\s]+@[^>\s]+)>/);
  if (bracketed) return bracketed[1].trim().toLowerCase();
  const loose = s.match(/\b([^\s<>"]+@[^\s<>"']+)\b/);
  return loose ? loose[1].trim().toLowerCase() : undefined;
}

export type ParsedEmail = {
  uid: number;
  messageId?: string;
  subject?: string;
  from?: string;
  to?: string;
  date?: string;
  text?: string;
  html?: string;
};

/**
 * Fetch sent mail from **today** (local midnight→midnight) for a company IMAP credential.
 * - companyId: company UUID (resolves `dbName`) or literal `company_…` DB name
 * - imapCredentialsId: UUID in `imap_credentials` for that company DB
 */
export async function fetchSentEmailsFromYesterday(
  companyId: string,
  imapCredentialsId: string | number,
  plainPassword?: string,
  mailbox?: string,
): Promise<ParsedEmail[]> {
  const companyIdRaw = String(companyId || '').trim();
  const credentialIdRaw = String(imapCredentialsId || '').trim();
  const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!UUID_RE.test(credentialIdRaw)) {
    throw new Error(`Invalid credentialId (expected UUID): ${credentialIdRaw}`);
  }

  let companyDb: string;
  const cleaned = companyIdRaw.replace(/[{}\s]/g, '');
  if (cleaned.toLowerCase().startsWith('company_')) {
    companyDb = cleaned.replace(/-/g, '_');
  } else if (UUID_RE.test(cleaned)) {
    try {
      const company = await masterClient.company.findUnique({
        where: { id: cleaned },
        select: { dbName: true },
      });
      companyDb = company ? company.dbName : `company_${cleaned.replace(/-/g, '_')}`;
    } catch {
      companyDb = `company_${cleaned.replace(/-/g, '_')}`;
    }
  } else {
    const maybe = String(companyIdRaw).replace(/[^0-9a-zA-Z_]/g, '_');
    try {
      const poolTry = getCompanyPool(maybe);
      await poolTry.query('SELECT 1');
      companyDb = maybe;
    } catch {
      throw new Error(`Invalid companyId format or company not found: ${companyIdRaw}`);
    }
  }

  const cred = await getCompanyClient(companyDb).imapCredential.findUnique({
    where: { id: credentialIdRaw },
  });

  if (!cred) throw new Error('imap_credentials not found');

  let password: string;
  if (plainPassword && String(plainPassword).length > 0) {
    password = String(plainPassword);
  } else {
    password = decryptPassword(cred.encryptedPassword);
  }
  const user = cred.emailAddress;
  const host = cred.imapHost;
  const port = cred.imapPort || 993;
  const tls = cred.useTls === undefined ? true : !!cred.useTls;

  const client = new ImapFlow({
    host,
    port,
    secure: !!tls,
    auth: { user, pass: password },
    logger: false,
    tls: { rejectUnauthorized: false },
  });

  const now = new Date();
  const since = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const before = new Date(since);
  before.setDate(since.getDate() + 1);

  try {
    await client.connect();
    console.log('[IMAP] connected to host', host);

    const mailboxes = await client.list();

    const preferred =
      mailbox && String(mailbox).trim() ? String(mailbox).trim() : undefined;
    const walkSent = (boxes: any[]): string | undefined => {
      for (const b of boxes) {
        const name = String(b.path || b.name || '');
        if (/sent|skickat|utgående|utgaende/i.test(name)) return name;
        if (Array.isArray(b.children) && b.children.length) {
          const found = walkSent(b.children as any[]);
          if (found) return found;
        }
      }
      return undefined;
    };

    const discovered = walkSent(mailboxes);
    const tryOrder = [
      preferred,
      discovered,
      '[Gmail]/Skickat',
      '[Gmail]/Sent Mail',
      '[Google Mail]/Sent Mail',
      'Sent Items',
      'Sent',
    ].filter((x): x is string => Boolean(x && String(x).trim()));

    let targetMailbox: string | null = null;
    for (const mb of [...new Set(tryOrder)]) {
      try {
        await client.mailboxOpen(mb);
        targetMailbox = mb;
        break;
      } catch (e) {
        console.error('[IMAP] Open folder failed:', mb, (e as Error)?.message);
      }
    }
    if (!targetMailbox) {
      throw new Error('Could not open sent mail folder');
    }
    console.log(
      '[IMAP] opened folder:',
      targetMailbox,
      mailboxLooksSent(targetMailbox) ? '(treated as sent)' : '(unexpected — not a known sent path)',
    );

    const uids = await client.search({ since, before });
    if (!uids || uids.length === 0) {
      console.log(`[IMAP] No messages in "${targetMailbox}" for today (local date range)`);
      return [];
    }

    const emails: ParsedEmail[] = [];
    const emailsToSave: EmailToSave[] = [];
    const direction: 'sent' | 'received' = mailboxLooksSent(targetMailbox) ? 'sent' : 'received';

    for (const uid of uids) {
      try {
        const msg = await client.fetchOne(uid, { envelope: true, uid: true });
        const env = msg.envelope || {};
        const subject = env.subject || undefined;
        const dateVal = env.date ? new Date(env.date).toISOString() : undefined;

        const formatAddresses = (addrs: any): string | undefined => {
          if (!addrs) return undefined;
          try {
            return addrs
              .map((a: any) => {
                const name = a.name || '';
                const mbox =
                  a.mailbox || a.host
                    ? `${a.mailbox || ''}@${a.host || ''}`.replace(/^@/, '')
                    : '';
                return name ? `${name} <${mbox}>` : mbox;
              })
              .filter(Boolean)
              .join(', ');
          } catch {
            return undefined;
          }
        };

        const parseAddresses = (addrs: any): { address: string; name?: string }[] => {
          if (!addrs) return [];
          try {
            return addrs
              .map((a: any) => ({
                address: `${a.mailbox || ''}@${a.host || ''}`.replace(/^@/, ''),
                ...(a.name ? { name: String(a.name) } : {}),
              }))
              .filter(
                (a: { address: string }) =>
                  Boolean(a.address) && a.address !== '@' && a.address.includes('@'),
              );
          } catch {
            return [];
          }
        };

        const from = formatAddresses(env.from);
        const to = formatAddresses(env.to || env.cc || env.bcc);
        const fromAddresses = parseAddresses(env.from);
        const toAddresses = parseAddresses(env.to);
        const ccAddresses = parseAddresses(env.cc);

        let primaryFrom =
          fromAddresses[0] ||
          parseAddresses(env.sender)[0] ||
          parseAddresses(env.replyTo)[0];

        if (!primaryFrom?.address) {
          const recovered = extractEmailFromFormattedHeader(from);
          if (recovered) primaryFrom = { address: recovered };
        }

        // This job only opens sent-folder candidates; use the mailbox owner when the server omits From.
        if (!primaryFrom?.address) {
          primaryFrom = { address: cred.emailAddress.trim().toLowerCase() };
        }

        const rawMid = env.messageId || env['message-id'];
        const normalizedMid = normalizeMessageId(typeof rawMid === 'string' ? rawMid : undefined);
        const stableMessageId =
          normalizedMid && normalizedMid.length > 0
            ? normalizedMid
            : `synthetic-${companyDb}-${cred.id}-${uid}`;

        emails.push({
          uid: Number(uid) || 0,
          messageId: normalizedMid,
          subject,
          from,
          to,
          date: dateVal,
        });

        emailsToSave.push({
          messageId: stableMessageId,
          source: 'imap',
          imapCredentialId: cred.id,
          direction,
          subject: subject ?? null,
          fromAddress: primaryFrom.address,
          fromName: primaryFrom.name ?? null,
          toAddresses,
          ccAddresses,
          bccAddresses: [],
          sentAt: dateVal ? new Date(dateVal) : null,
          mailbox: targetMailbox,
        });
      } catch (fetchErr) {
        console.error('[IMAP] fetch envelope failed uid', uid, fetchErr);
        continue;
      }
    }

    const result = await saveEmailsToDB(companyDb, emailsToSave);
    console.log(
      `[IMAP] ${companyDb} credential ${cred.id}: DB persist saved=${result.saved} skipped=${result.skipped} errors=${result.errors} (candidates=${emailsToSave.length})`,
    );

    return emails;
  } catch (err: any) {
    console.error('IMAP fetch failed full error:', err);
    console.error('IMAP error command:', err?.command, 'serverResponse:', err?.serverResponse);
    throw new Error(`IMAP fetch failed: ${err?.message || String(err)}`);
  } finally {
    try {
      await client.logout();
    } catch {
      try {
        await client.close();
      } catch {
        /* ignore */
      }
    }
  }
}

export default fetchSentEmailsFromYesterday;
