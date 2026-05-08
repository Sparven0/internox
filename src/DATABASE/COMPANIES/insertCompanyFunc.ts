import { masterClient } from '../masterpool';

// Note: dbName is required. For full onboarding (with a dedicated DB), use onboardCompany() instead.
export const insertCompany = async (name: string, domain: string, dbName: string): Promise<string> => {
  const company = await masterClient.company.create({
    data: { name, domain, dbName },
  });
  return company.id;
};
