import { getCompanyClient } from '../../connectionManager';

export type EmailToSave = {
  messageId: string;
  source: string;
  imapCredentialId?: string | null;
  direction: 'sent' | 'received';
  subject?: string | null;
  fromAddress: string;
  fromName?: string | null;
  toAddresses: { address: string; name?: string }[];
  ccAddresses: { address: string; name?: string }[];
  bccAddresses: { address: string; name?: string }[];
  replyTo?: string | null;
  sentAt?: Date | null;
  bodyText?: string | null;
  bodyHtml?: string | null;
  inReplyTo?: string | null;
  threadId?: string | null;
  mailbox?: string | null;
};

/**
 * Upsert emails into the `emails` table for a given company DB.
 *
 * Duplicate prevention: the UNIQUE constraint on `message_id` means an email
 * arriving from multiple sources (e.g. IMAP + OAuth) is stored only once.
 *
 * User assignment: handled automatically by the DB trigger
 * `assign_email_user`, which matches `from_address` → `users.email`.
 *
 * Customer linking: we match the first recipient domain against
 * `customers.domain` and write `customer_id` on insert/update.
 */
export async function saveEmailsToDB(
  companyDb: string,
  emails: EmailToSave[]
): Promise<{ saved: number; skipped: number; errors: number }> {
  if (emails.length === 0) return { saved: 0, skipped: 0, errors: 0 };

  const client = getCompanyClient(companyDb);
  let saved = 0;
  let skipped = 0;
  let errors = 0;

  for (const email of emails) {
    try {
      // Resolve customer_id: match recipient email address first, then domain
      let customerId: string | null = null;
      const recipients = [...email.toAddresses, ...email.ccAddresses];

      // 1. Exact email match
      for (const { address } of recipients) {
        const normalised = address.toLowerCase();
        const customer = await client.customer.findFirst({
          where: { email: normalised },
          select: { id: true },
        });
        if (customer) {
          customerId = customer.id;
          break;
        }
      }

      // 2. Fallback: domain match
      if (!customerId) {
        const recipientDomains = recipients
          .map((a) => a.address.split('@')[1]?.toLowerCase())
          .filter((d): d is string => Boolean(d) && d !== '');

        for (const domain of recipientDomains) {
          const customer = await client.customer.findFirst({
            where: { domain },
            select: { id: true },
          });
          if (customer) {
            customerId = customer.id;
            break;
          }
        }
      }

      // 3. Auto-link employee ↔ customer via EmployeeCustomer junction
      if (customerId && email.imapCredentialId) {
        const cred = await client.imapCredential.findUnique({
          where: { id: email.imapCredentialId },
          select: { userId: true },
        });
        if (cred?.userId) {
          await client.employeeCustomer.upsert({
            where: { userId_customerId: { userId: cred.userId, customerId } },
            create: { userId: cred.userId, customerId },
            update: {},
          });
        }
      }

      await client.email.upsert({
        where: { messageId: email.messageId },
        create: {
          messageId: email.messageId,
          source: email.source,
          imapCredentialId: email.imapCredentialId ?? null,
          direction: email.direction,
          subject: email.subject ?? null,
          fromAddress: email.fromAddress,
          fromName: email.fromName ?? null,
          toAddresses: email.toAddresses,
          ccAddresses: email.ccAddresses,
          bccAddresses: email.bccAddresses,
          replyTo: email.replyTo ?? null,
          sentAt: email.sentAt ?? null,
          bodyText: email.bodyText ?? null,
          bodyHtml: email.bodyHtml ?? null,
          inReplyTo: email.inReplyTo ?? null,
          threadId: email.threadId ?? null,
          mailbox: email.mailbox ?? null,
          customerId,
        },
        update: {
          // Re-resolve mutable fields; messageId and source are stable
          subject: email.subject ?? undefined,
          fromName: email.fromName ?? undefined,
          toAddresses: email.toAddresses,
          ccAddresses: email.ccAddresses,
          bccAddresses: email.bccAddresses,
          bodyText: email.bodyText ?? undefined,
          bodyHtml: email.bodyHtml ?? undefined,
          // Only overwrite customerId if we found one (don't clear an existing link)
          ...(customerId ? { customerId } : {}),
        },
      });

      saved++;
    } catch (err: any) {
      if (err?.code === 'P2002') {
        // Unique conflict on message_id – already stored, treat as skipped
        skipped++;
      } else {
        console.error('[saveEmailsToDB] Failed to save email', email.messageId, err?.message);
        errors++;
      }
    }
  }

  return { saved, skipped, errors };
}
