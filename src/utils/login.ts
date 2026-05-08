import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import masterPool from '../DATABASE/masterpool';
import { getCompanyPool } from '../DATABASE/connectionManager';
import { Request, Response } from 'express';

export async function login(req: Request, res: Response): Promise<any> {
  try {
    const { email, password, companyDomain } = req.body;

    if (!email || !password || !companyDomain) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await masterPool.query(
      `SELECT db_name, name FROM companies WHERE domain = $1`,
      [companyDomain]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const dbName = result.rows[0].db_name;
    const companyName = result.rows[0].name;          // ← from companies table
    const companyPool = getCompanyPool(dbName);        // ← was missing

    const userResult = await companyPool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    if (userResult.rowCount === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = userResult.rows[0];

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied: Admins only' });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        companyId: user.company_id,
        dbName,
        companyName,                                   // ← fixed
      },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    res.json({ token, user: { id: user.id, email: user.email, role: user.role, companyId: user.company_id } });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}