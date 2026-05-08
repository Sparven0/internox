import { masterClient } from '../masterpool';
import { getCompanyPool } from '../connectionManager';

export async function getCompanyPoolByDomain(domain: string) {
  const company = await masterClient.company.findUnique({ where: { domain } });
  if (!company) throw new Error(`No company found for domain: ${domain}`);
  return getCompanyPool(company.dbName);
}
