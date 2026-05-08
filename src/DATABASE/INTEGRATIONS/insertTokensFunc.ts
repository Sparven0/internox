import { masterClient } from '../masterpool';
import { getCompanyClient } from '../connectionManager';

export async function insertToken(
  companyName: string,
  tokens: { service: string; access_token: string; refresh_token?: string; expires_at?: string }
): Promise<void> {
  const company = await masterClient.company.findFirst({ where: { name: companyName } });
  if (!company) throw new Error(`Company not found: ${companyName}`);

  await getCompanyClient(company.dbName).companyIntegration.create({
    data: {
      companyId: company.id,
      service: tokens.service,
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token ?? null,
      expiresAt: tokens.expires_at ? new Date(tokens.expires_at) : null,
    },
  });
}

export async function updateTokens(
  companyId: string,
  service: string,
  tokens: { access_token?: string; refresh_token?: string; expires_at?: string }
): Promise<void> {
  const company = await masterClient.company.findUnique({ where: { id: companyId } });
  if (!company) throw new Error('Company not found');

  await getCompanyClient(company.dbName).companyIntegration.updateMany({
    where: { companyId, service: { equals: service, mode: 'insensitive' } },
    data: {
      ...(tokens.access_token ? { accessToken: tokens.access_token } : {}),
      ...(tokens.refresh_token ? { refreshToken: tokens.refresh_token } : {}),
      ...(tokens.expires_at ? { expiresAt: new Date(tokens.expires_at) } : {}),
    },
  });
}

export default { insertToken, updateTokens };