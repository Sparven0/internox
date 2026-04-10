import bcrypt from 'bcrypt';
import crypto from 'crypto';

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

function getKey() {
  const raw = process.env.IMAP_ENCRYPTION_KEY || '';
  return crypto.createHash('sha256').update(String(raw)).digest();
}

export function encryptPassword(plain: string): string {
  const iv = crypto.randomBytes(12);
  const key = getKey();
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  let encrypted = cipher.update(plain, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  const tag = cipher.getAuthTag();
  return `${iv.toString('base64')}:${tag.toString('base64')}:${encrypted}`;
}

export function decryptPassword(encrypted: string): string {
  if (!encrypted) return '';
  // expected format iv:tag:data
  const parts = String(encrypted).split(':');
  if (parts.length !== 3) {
    // Detect common bcrypt/hashing formats and provide clearer guidance
    if (String(encrypted).startsWith('$2')) {
      throw new Error('Stored IMAP password appears to be a bcrypt/hash. Re-save IMAP credentials using the app to store an encrypted password.');
    }
    throw new Error('Stored IMAP password is not in the expected encrypted format (iv:tag:data). Re-save IMAP credentials to fix.');
  }
  const [ivB64, tagB64, data] = parts;
  let iv: Buffer;
  let tag: Buffer;
  try {
    iv = Buffer.from(ivB64, 'base64');
    tag = Buffer.from(tagB64, 'base64');
  } catch (e) {
    throw new Error('Invalid encrypted password encoding (iv/tag). Re-save IMAP credentials.');
  }
  const key = getKey();
  try {
    const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(tag);
    let out = decipher.update(data, 'base64', 'utf8');
    out += decipher.final('utf8');
    return out;
  } catch (e) {
    throw new Error('Failed to decrypt IMAP password. Ensure IMAP_ENCRYPTION_KEY matches the key used to encrypt the password.');
  }
}

export default hashPassword;


