import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const generateToken = () => {
  const token = jwt.sign(
    { role: 'super_admin' }, // Payload
    process.env.JWT_SECRET!, // Secret key
    { expiresIn: '1h' } // Token expiration
  );

  console.log('GENERATED TOKEN:',(token)); // Decode and log the token
};



generateToken();