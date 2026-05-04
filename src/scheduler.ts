import cron from "node-cron";
import { masterClient } from "./DATABASE/masterpool";
import { getCompanyClient } from "./DATABASE/connectionManager";
import { syncFortnoxData } from "./DATABASE/INTEGRATIONS/Fortnox/syncFortnoxData";
import fetchSentEmailsFromYesterday from "./DATABASE/INTEGRATIONS/Email/imapConnect";

async function runFortnoxSync() {
  const companies = await masterClient.company.findMany();
  for (const company of companies) {
    try {
      const result = await syncFortnoxData(company.id);
      console.log(
        `[Fortnox sync] ${company.name}: ${result.customers} customers, ${result.invoices} invoices`,
      );
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
          console.error(`[IMAP sync] ${company.name} credential ${cred.id} failed:`, err);
        }
      }
    } catch (err) {
      console.error(`[IMAP sync] ${company.name} failed:`, err);
    }
  }
}

export function startScheduler() {
  // Fortnox: once per hour
  cron.schedule("0 * * * *", () => {
    runFortnoxSync().catch(console.error);
  });

  // IMAP: once per day at 02:00
  cron.schedule("0 2 * * *", () => {
    runImapSync().catch(console.error);
  });

  console.log("Scheduler started.");
}
