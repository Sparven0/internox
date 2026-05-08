import { masterClient } from '../DATABASE/masterpool';
import { getCompanyClient } from '../DATABASE/connectionManager';
import { hashPassword } from './encryptPassword';

export async function createCompanyAdmin(company: string, email: string, password: string) {
  const companyData = await masterClient.company.findFirst({ where: { name: company } });
  if (!companyData) throw new Error('Company not found');

  const encryptedPassword = await hashPassword(password);
  await getCompanyClient(companyData.dbName).user.create({
    data: { email, companyId: companyData.id, password: encryptedPassword, role: 'admin' },
  });
}