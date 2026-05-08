import { masterClient } from '../masterpool';
import { getCompanyClient } from '../connectionManager';

export async function extractUser(companyName: string) {
  const company = await masterClient.company.findFirst({ where: { name: companyName } });
  if (!company) throw new Error('Company not found');
  return getCompanyClient(company.dbName).user.findMany({
    select: { id: true, email: true, role: true },
  });
}
