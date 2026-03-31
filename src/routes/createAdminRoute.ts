import express from 'express';
import { createAdmin } from '../DATABASE/USERS/insertAdminFunc';
import { checkAdmin } from '../MIDDLEWARES/requireSuperAdmin';

const router = express.Router();

/**
 * @openapi
 * /create-admin:
 *   post:
 *     summary: Create a new admin user
 *     description: Allows super admins to create a new admin user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin user created successfully.
 *       400:
 *         description: Error creating admin user.
 */

router.post('/', checkAdmin, async (req, res) => {
  const { userName, password } = req.body;

  try {
    await createAdmin(userName, password, req.headers.authorization?.split(' ')[1]!);
    res.status(201).json({ message: 'Admin user created successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating admin user' + error });
  }
});

export default router;