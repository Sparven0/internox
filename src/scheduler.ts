import cron from "node-cron";
import { masterClient } from "./DATABASE/masterpool";
import { getCompanyClient } from "./DATABASE/connectionManager";
import {
  syncFortnoxData,
  syncAllInvoiceDetails,
} from "./DATABASE/INTEGRATIONS/Fortnox/syncFortnoxData";
import { syncFortnoxBookkeeping } from "./DATABASE/INTEGRATIONS/Fortnox/syncFortnoxBookkeeping";
import fetchSentEmailsFromYesterday from "./DATABASE/INTEGRATIONS/Email/imapConnect";
import { proactivelyRefreshFortnoxToken } from "./DATABASE/INTEGRATIONS/Fortnox/fortnoxData";

async function runFortnoxTokenRefresh() {
  const companies = await masterClient.company.findMany();
  for (const company of companies) {
    try {
      await proactivelyRefreshFortnoxToken(company.id);
      console.log(`[Fortnox token refresh] ${company.name}: OK`);
    } catch (err: any) {
      if (err?.message?.includes('No Fortnox integration')) continue;
      console.error(
        `[Fortnox token refresh] ${company.name} failed:`,
        err?.response?.data ?? err?.message ?? err,
      );
    }
  }
}

async function runFortnoxSync() {
  const companies = await masterClient.company.findMany();
  for (const company of companies) {
    try {
      const result = await syncFortnoxData(company.id);
      console.log(
        `[Fortnox sync] ${company.name}: ${result.customers} customers, ${result.invoices} invoices`,
      );
      const rowsSynced = await syncAllInvoiceDetails(company.id);
      console.log(
        `[Fortnox invoice details] ${company.name}: ${rowsSynced} invoices detail-synced`,
      );
      await syncFortnoxBookkeeping(company.id);
      console.log(`[Fortnox bookkeeping sync] ${company.name}: completed`);
    } catch (err) {
      console.error(`[Fortnox sync] ${company.name} failed:`, err);
    }
  }
}

async function runImapSync() {
  const companies = await masterClient.company.findMany();
  for (const company of companies) {
    try {
      const client = getCompanyClient(company.dbName);
      const creds = await client.imapCredential.findMany();
      for (const cred of creds) {
        try {
          await fetchSentEmailsFromYesterday(company.id, cred.id);
        } catch (err) {
          console.error(
            `[IMAP sync] ${company.name} credential ${cred.id} failed:`,
            err,
          );
        }
      }
    } catch (err) {
      console.error(`[IMAP sync] ${company.name} failed:`, err);
    }
  }
}

export function startScheduler() {
  let fortnoxSyncRunning = false;

  // Proactively refresh Fortnox tokens every 50 minutes to prevent expiry
  cron.schedule("*/50 * * * *", () => {
    runFortnoxTokenRefresh().catch(console.error);
  });

  cron.schedule("0 * * * *", () => {
    if (fortnoxSyncRunning) {
      console.warn("[Fortnox sync] Previous run still in progress, skipping.");
      return;
    }
    fortnoxSyncRunning = true;
    runFortnoxSync()
      .catch(console.error)
      .finally(() => {
        fortnoxSyncRunning = false;
      });
  });

  // IMAP: once per day at 02:00
  cron.schedule("0 2 * * *", () => {
    runImapSync().catch(console.error);
  });

  console.log("Scheduler started.");
}
