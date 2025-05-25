// // routes/auth.ts
// import express from 'express';
// import { createUser } from '../DATABASE/insertUserFunc';
// const router = express.Router();

// router.post('/', async (req, res) => {
//   const { email, companyDomain } = req.body;

//   try {
//     await createUser(email,companyDomain);
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to create user'});
//   }
// });

// export default router;
