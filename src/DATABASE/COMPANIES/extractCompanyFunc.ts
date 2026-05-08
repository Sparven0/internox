import { masterClient } from '../masterpool';

export async function extractCompany(name: string) {
  const company = await masterClient.company.findFirst({ where: { name } });
  if (!company) throw new Error(`Company not found: ${name}`);
  return company;
}
