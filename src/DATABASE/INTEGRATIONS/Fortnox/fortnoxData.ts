import { masterClient } from "../../masterpool";
import { getCompanyClient } from "../../connectionManager";
import { connectFortnox, refreshFortnoxToken } from "./fortnoxConnect";
import { updateTokens } from "../insertTokensFunc";

async function fetchFortnoxForCompany(
  companyId: string,
  endpoint: string,
): Promise<any> {
  const company = await masterClient.company.findUnique({
    where: { id: companyId },
  });
  if (!company) throw new Error(`Company not found: ${companyId}`);

  const integration = await getCompanyClient(
    company.dbName,
  ).companyIntegration.findFirst({
    where: { companyId, service: { equals: "fortnox", mode: "insensitive" } },
    orderBy: { expiresAt: "desc" },
  });
  if (!integration)
    throw new Error(`No Fortnox integration found for company: ${companyId}`);

  return connectFortnox(
    integration.accessToken,
    integration.refreshToken ?? "",
    endpoint,
    async (newTokens) => {
      try {
        await updateTokens(companyId, "Fortnox", {
          access_token: newTokens.access_token,
          refresh_token: newTokens.refresh_token,
          expires_at: newTokens.expires_at,
        });
      } catch (err) {
        console.warn(
          "Failed to persist refreshed tokens for company",
          companyId,
          err,
        );
      }
    },
  );
}

export async function proactivelyRefreshFortnoxToken(
  companyId: string,
): Promise<void> {
  const company = await masterClient.company.findUnique({
    where: { id: companyId },
  });
  if (!company) throw new Error(`Company not found: ${companyId}`);

  const integration = await getCompanyClient(
    company.dbName,
  ).companyIntegration.findFirst({
    where: { companyId, service: { equals: "fortnox", mode: "insensitive" } },
    orderBy: { expiresAt: "desc" },
  });
  if (!integration || !integration.refreshToken) {
    throw new Error(`No Fortnox integration found for company: ${companyId}`);
  }

  // Only refresh if token expires within the next 15 minutes
  const refreshThreshold = new Date(Date.now() + 15 * 60 * 1000);
  if (integration.expiresAt && integration.expiresAt > refreshThreshold) {
    return; // Token still valid, skip
  }

  const newTokens = await refreshFortnoxToken(integration.refreshToken);
  await updateTokens(companyId, "Fortnox", {
    access_token: newTokens.access_token,
    refresh_token: newTokens.refresh_token,
    expires_at: newTokens.expires_at,
  });
}

export default fetchFortnoxForCompany;
