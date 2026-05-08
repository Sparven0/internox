import { masterClient } from '../masterpool';
import { getCompanyClient } from '../connectionManager';
import { encryptPassword } from '../../utils/encryptPassword';

export async function addImapCredentials(
  companyName: string,
  userEmail: string,
  imapHost: string,
  imapPort: number,
  emailAddress: string,
  plainPassword: string
) {
  const company = await masterClient.company.findFirst({ where: { name: companyName } });
  if (!company) throw new Error(`Company not found: ${companyName}`);

  const client = getCompanyClient(company.dbName);
  const user = await client.user.findUnique({ where: { email: userEmail } });
  if (!user) throw new Error(`User not found: ${userEmail}`);

  const encryptedPassword = encryptPassword(plainPassword);
  const credential = await client.imapCredential.create({
    data: { userId: user.id, imapHost, imapPort, emailAddress, encryptedPassword },
  });

  return { id: credential.id };
}