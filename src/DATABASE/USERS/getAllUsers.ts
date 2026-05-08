import { getCompanyClient } from '../connectionManager';

export async function getAllUsers(companyId: string) {
  const dbName = `company_${companyId.replace(/-/g, '_')}`;
  const users = await getCompanyClient(dbName).user.findMany({
    select: { id: true, email: true, role: true, createdAt: true },
  });
  return users.map(u => ({ ...u, created_at: u.createdAt.toISOString() }));
}