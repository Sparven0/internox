import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export function authCompanyAdmin(req: Request, res: Response, next: NextFunction):any {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    // Check if the user has the required role
    if (decoded.role !== 'admin') {
        return res.status(403).json({ message: 'Forbidden' });
    }

    next(); // Proceed to the next middleware or route handler
} catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
}
}

