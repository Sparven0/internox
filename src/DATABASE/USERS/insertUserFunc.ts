import { hashPassword } from '../../utils/encryptPassword';
import { masterClient } from '../masterpool';
import { getCompanyClient } from '../connectionManager';

export async function createUser(email: string, companyDomain: string, password: string) {
  const company = await masterClient.company.findUnique({ where: { domain: companyDomain } });
  if (!company) throw new Error('Company not found');

  if (!email.endsWith('@' + companyDomain)) {
    throw new Error('Company domain does not match email domain');
  }

  const encryptedPassword = await hashPassword(password);
  await getCompanyClient(company.dbName).user.create({
    data: { email, companyId: company.id, password: encryptedPassword, role: 'employee' },
  });
}
