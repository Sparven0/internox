import bcrypt, { hashSync } from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

// Hashes the password
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

// Compares a password with its hash
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}


