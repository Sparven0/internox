import { masterClient } from '../../masterpool';
import { getCompanyClient } from '../../connectionManager';

export async function extractImapCredentials(companyName: string) {
  const company = await masterClient.company.findFirst({ where: { name: companyName } });
  if (!company) throw new Error(`Company not found: ${companyName}`);
  const creds = await getCompanyClient(company.dbName).imapCredential.findMany();
  return creds.map(c => ({
    id: c.id,
    user_id: c.userId ?? '',
    imap_host: c.imapHost,
    imap_port: c.imapPort,
    email_address: c.emailAddress,
  }));
}
