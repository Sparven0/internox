import { hashPassword } from '../../utils/encryptPassword';
import { masterClient } from '../masterpool';
import jwt, { JwtPayload } from 'jsonwebtoken';

export async function createAdmin(userName: string, password: string, token: string) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
  if (decoded.role !== 'super_admin') throw new Error('Unauthorized');

  const encryptedPassword = await hashPassword(password);
  await masterClient.user.create({
    data: { userName, password: encryptedPassword, role: 'admin' },
  });
}