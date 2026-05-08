import dotenv from 'dotenv';
dotenv.config();

// use require for modules without types to avoid TS errors
const { ImapFlow } = require('imapflow');
const { simpleParser }: any = require('mailparser');

import { getCompanyPool, getCompanyClient } from '../../connectionManager';
import { masterClient } from '../../masterpool';
import { decryptPassword } from '../../../utils/encryptPassword';
import { saveEmailsToDB, EmailToSave } from './saveEmailsToDB';

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
 * Fetch sent emails from yesterday for a given company's IMAP credential id.
 * - companyId: uuid of the company (used to resolve company DB) OR the company_db_name (company_xxx...)
 * - imapCredentialsId: id in table imap_credentials inside the company DB
 */
export async function fetchSentEmailsFromYesterday(companyId: string, imapCredentialsId: string | number, plainPassword?: string, mailbox?: string): Promise<ParsedEmail[]> {
  // sanitize and validate inputs
  const companyIdRaw = String(companyId || '').trim();
  const credentialIdRaw = String(imapCredentialsId || '').trim();
  const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  // credential id can be UUID or numeric id
  const isCredUuid = UUID_RE.test(credentialIdRaw);
  const isCredNumber = /^\d+$/.test(credentialIdRaw);
  if (!isCredUuid && !isCredNumber) {
    throw new Error(`Invalid credentialId format: ${credentialIdRaw}`);
  }

  // determine company DB name: accept either company_<...> or a UUID to lookup
  let companyDb: string;
  const cleaned = companyIdRaw.replace(/[{}\s]/g, '');
  if (cleaned.toLowerCase().startsWith('company_')) {
    companyDb = cleaned.replace(/-/g, '_');
  } else if (UUID_RE.test(cleaned)) {
    try {
      const company = await masterClient.company.findUnique({ where: { id: cleaned }, select: { dbName: true } });
      companyDb = company ? company.dbName : `company_${cleaned.replace(/-/g, '_')}`;
    } catch (e) {
      companyDb = `company_${cleaned.replace(/-/g, '_')}`;
    }
  } else {
    // try to treat the input as a db-name-ish string by normalizing
    const maybe = String(companyIdRaw).replace(/[^0-9a-zA-Z_]/g, '_');
    try {
      const poolTry = getCompanyPool(maybe);
      await poolTry.query('SELECT 1');
      companyDb = maybe;
      
    } catch (e) {
      throw new Error(`Invalid companyId format or company not found: ${companyIdRaw}`);
    }
  }

  // use the resolved companyDb and cleaned credential id
  imapCredentialsId = credentialIdRaw;
  const cred = await getCompanyClient(companyDb).imapCredential.findFirst({
    where: { id: imapCredentialsId },
  });

  if (!cred) throw new Error('imap_credentials not found');

  // use provided plainPassword if given, otherwise decrypt stored value
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
    auth: {
      user,
      pass: password,
    },
    logger: false,
    // allow self-signed in dev; remove in prod
    tls: { rejectUnauthorized: false },
  });

  // calculate today range (start of today to start of tomorrow)
  const now = new Date();
  const since = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const before = new Date(since);
  before.setDate(since.getDate() + 1);

  try {
    await client.connect();
    console.log('IMAP connected to host', host);
    const boxes = await client.list();
// console.log('Available mailboxes:', JSON.stringify(boxes, null, 2));


    // list mailboxes and find a suitable mailbox
    const mailboxes = await client.list();
    // console.log('IMAP mailboxes:', JSON.stringify(mailboxes, null, 2));
    // mailboxes is an array; mailbox.path/name may vary; search for 'sent' if not specified
    let targetMailbox: string | undefined = mailbox && String(mailbox).trim() ? String(mailbox).trim() : undefined;
    const walk = (boxes: any[]): string | undefined => {
      for (const b of boxes) {
        const name = String(b.path || b.name || '');
        if (/sent/i.test(name)) return name;
        if (Array.isArray(b.children) && b.children.length) {
          const found: string | undefined = walk(b.children as any[]);
          if (found) return found;
        }
      }
      return undefined;
    };
    if (!targetMailbox) {
      targetMailbox = walk(mailboxes) || 'Sent';
    }

    // open mailbox
    try {
      // console.log('Attempting to open mailbox:', targetMailbox);
      await client.mailboxOpen(targetMailbox);
      // console.log('Opened mailbox:', targetMailbox);
    } catch (e) {
      console.error('Failed to open mailbox', targetMailbox, 'error:', e);
      // fallback alternatives
    // open mailbox
let opened = false;
const mailboxesToTry = [targetMailbox, '[Gmail]/Skickat', '[Gmail]/Sent Mail', '[Google Mail]/Sent Mail', 'Sent Items'];

for (const mb of mailboxesToTry) {
  try {
    // console.log('Attempting to open mailbox:', mb);
    await client.mailboxOpen(mb);
    // console.log('Opened mailbox:', mb);
    targetMailbox = mb;
    opened = true;
    break;
  } catch (e) {
    console.error('Failed to open mailbox:', mb, (e as any)?.message);
  }
}

if (!opened) {
  throw new Error('Could not open any sent mailbox');
}

// search for UIDs in date range — this runs AFTER a mailbox is successfully opened
// console.log('Searching UIDs with criteria since:', since.toISOString(), 'before:', before.toISOString());
const uids = await client.search({ since, before });
// console.log('Search returned uids count:', uids?.length || 0, 'sample:', (uids || []).slice(0, 50));
if (!uids || uids.length === 0) return [];
    }

    // search for UIDs in date range
    // console.log('Searching UIDs with criteria since:', since.toISOString(), 'before:', before.toISOString());
    const uids = await client.search({ since, before });
    // console.log('Search returned uids count:', uids?.length || 0, 'sample:', (uids || []).slice(0, 50));
    if (!uids || uids.length === 0) return [];

    const emails: ParsedEmail[] = [];
    const emailsToSave: EmailToSave[] = [];
    const direction: 'sent' | 'received' = /sent/i.test(targetMailbox ?? '') ? 'sent' : 'received';

    // fetch envelope-only per UID to reliably get header fields
    for (const uid of uids) {
      try {
        // console.log('Fetching envelope for uid:', uid);
        const msg = await client.fetchOne(uid, { envelope: true, uid: true });
        const env = msg.envelope || msg.envelope || {};
        const subject = env.subject || undefined;
        const dateVal = env.date ? (new Date(env.date)).toISOString() : undefined;

        const formatAddresses = (addrs: any): string | undefined => {
          if (!addrs) return undefined;
          try {
            return addrs.map((a: any) => {
              const name = a.name || '';
              const mailbox = a.mailbox || a.host ? `${a.mailbox || ''}@${a.host || ''}`.replace(/^@/, '') : '';
              return name ? `${name} <${mailbox}>` : mailbox;
            }).filter(Boolean).join(', ');
          } catch (e) {
            return undefined;
          }
        };

        // Parse envelope addresses into structured objects for DB storage
        const parseAddresses = (addrs: any): { address: string; name?: string }[] => {
          if (!addrs) return [];
          try {
            return addrs
              .map((a: any) => ({
                address: `${a.mailbox || ''}@${a.host || ''}`.replace(/^@/, ''),
                ...(a.name ? { name: String(a.name) } : {}),
              }))
              .filter((a: { address: string }) => a.address && a.address !== '@');
          } catch {
            return [];
          }
        };

        const from = formatAddresses(env.from);
        const to = formatAddresses(env.to || env.cc || env.bcc);
        // RFC 2822 Message-ID from envelope; fall back to a stable synthetic id
        const messageId: string | undefined = env.messageId || env['message-id'] || undefined;
        const stableMessageId = messageId ?? `synthetic-${companyDb}-${cred.id}-${uid}`;

        const fromAddresses = parseAddresses(env.from);
        const toAddresses = parseAddresses(env.to);
        const ccAddresses = parseAddresses(env.cc);
        const primaryFrom = fromAddresses[0];

        emails.push({
          uid: Number(uid) || 0,
          messageId,
          subject,
          from,
          to,
          date: dateVal,
        });

        if (primaryFrom?.address) {
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
            mailbox: targetMailbox ?? null,
          });
        }
      } catch (fetchErr) {
        console.error('Failed to fetch envelope for uid', uid, fetchErr);
        continue;
      }
    }

    try {
      const result = await saveEmailsToDB(companyDb, emailsToSave);
      // console.log(`[imapConnect] DB persist: ${result.saved} saved, ${result.skipped} skipped, ${result.errors} errors`);
    } catch (saveErr) {
      console.error('[imapConnect] Failed to persist emails to DB:', saveErr);
    }

    return emails;
  } catch (err: any) {
    // surface friendly error and log detailed imapflow properties if present
    console.error('IMAP fetch failed full error:', err);
    console.error('IMAP error command:', err?.command, 'serverResponse:', err?.serverResponse);
    throw new Error(`IMAP fetch failed: ${err?.message || String(err)}`);
  } finally {
    try {
      await client.logout();
    } catch (e) {
      try { await client.close(); } catch (_) { /* ignore */ }
    }
  }
}

export default fetchSentEmailsFromYesterday;
