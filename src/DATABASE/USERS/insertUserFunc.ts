import { hashPassword } from '../../utils/encryptPassword';
import { masterClient } from '../masterpool';
import { getCompanyClient } from '../connectionManager';
import { Prisma } from '../../__generated__/master';

export async function createUser(email: string, companyDomain: string, password: string) {
  const company = await masterClient.company.findUnique({ where: { domain: companyDomain } });
  if (!company) throw new Error('Company not found');

  // Borttagen: e-postdomän-validering — ni använder Gmail-adresser

  const encryptedPassword = await hashPassword(password);
  
  try {
    await getCompanyClient(company.dbName).user.create({
      data: { email, companyId: company.id, password: encryptedPassword, role: 'employee' },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
      return; // Användaren finns redan — det är ok, fortsätt
    }
    throw err; // Kasta vidare alla andra fel
  }
}