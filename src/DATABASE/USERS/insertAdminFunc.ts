
import { hashPassword } from '../../utils/encryptPassword';
import masterPool from '../masterpool';
import jwt, { JwtPayload } from 'jsonwebtoken';

export async function createAdmin(userName: string, password: string, token: string) {
  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    // Check if the user has the required role
    if (decoded.role !== 'super_admin') {
      throw new Error('Unauthorized');
    }

    // Hash the password
    const encryptedPassword = await hashPassword(password);
    console.log(encryptedPassword);

    // Insert the new admin user into the database
    await masterPool.query(
      `INSERT INTO users (user_name, password, role) VALUES ($1, $2, $3)`,
      [userName, encryptedPassword, 'admin']
    );
  } catch (error) {
    throw new Error('Unauthorized or invalid token');
  }
}