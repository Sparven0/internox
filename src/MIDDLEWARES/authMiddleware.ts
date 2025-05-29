import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || '';

function authMiddleware(req: Request, res: Response, next: NextFunction):any{
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { role: string }; // Type assertion to access 'role' property
    if (decoded.role !== 'admin') { // Corrected comparison
      return res.status(403).json({ message: 'Forbidden: Admin access required' });
    }
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

export default authMiddleware;