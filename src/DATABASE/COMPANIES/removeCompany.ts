import { masterClient } from '../masterpool';
import masterPool from '../masterpool';

export async function removeCompany(companyId: string): Promise<void> {
  const company = await masterClient.company.findUnique({ where: { id: companyId } });
  if (!company) throw new Error(`Company not found: ${companyId}`);

  await masterClient.company.delete({ where: { id: companyId } });

  await masterPool.query(`DROP DATABASE IF EXISTS "${company.dbName}"`);
}
