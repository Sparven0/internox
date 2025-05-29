import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import masterPool from '../DATABASE/masterpool';
import { Request, Response } from 'express'; // Ensure these are imported

export async function login(req: Request, res: Response): Promise<any> {
  try {
    const {user_name, password} = req.body;

    // Validate input
    if (!user_name || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Query the master database for the company
    const result = await masterPool.query(
      `SELECT db_name FROM companies WHERE user_name = $1 AND role = 'admin'`,
      [user_name]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Company not found' });
    }


    const user = result.rows[0];

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET!, // Ensure JWT_SECRET is defined in your environment variables
      { expiresIn: '1h' }
    );


    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}