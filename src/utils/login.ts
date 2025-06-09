import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import masterPool from '../DATABASE/masterpool';
import { getCompanyPool } from '../DATABASE/connectionManager';
import { Request, Response } from 'express'; // Ensure these are imported

export async function login(req: Request, res: Response): Promise<any> {
  try {
    const { email, password, companyDomain } = req.body;

    // Validate input
    if (!email || !password || !companyDomain) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    // Query the master database for the company
    const result = await masterPool.query(
      `SELECT db_name FROM companies WHERE domain = $1`,
      [companyDomain]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Company not found' });
    }

    const dbName = result.rows[0].db_name;
    const companyPool = getCompanyPool(dbName);

    // Fetch user from the company database
    const userResult = await companyPool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );
    if (userResult.rowCount === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = userResult.rows[0];

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied: Admins only' });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        companyId: user.company_id,
        dbName, // Optional but useful for multitenancy
      },
      process.env.JWT_SECRET!, // Ensure JWT_SECRET is defined in your environment variables
      { expiresIn: '1h' }
    );


    res.json({ token, user: { id: user.id, email: user.email, role: user.role, companyId: user.company_id } });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}