import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import masterPool from './DATABASE/masterpool';
import onboardRoute from './routes/onboardingRoute';
import userRouter from './routes/newUserRoute';
import extractUserRouter from './routes/extractUsersRoute';
// import companyRouter from './routes/newCompanyRoute';
import extractCompany from './routes/CompanyRoute';
import newToken from './routes/newCredentialsRoute';
import newImapCreds from './routes/newImapCredentialsRoute'
import createAdmin from './routes/createAdminRoute';
import loginRoute from './routes/loginRoute';
import createCompanyAdmin from './routes/createCompanyAdminRoute';
import fortnox from './routes/fortnoxCallbackRoute';
import fortnoxDataRoute from './routes/fortnoxDataRoute';
import getAllUsers from './routes/getAllUsersRoute';
import getImapRoute from './routes/getImapRoute';

dotenv.config();

async function waitForDb(retries = 5) {
  while (retries) {
    try {
      await masterPool.query('SELECT 1');
      console.log('Connected to database.');
      return;
    } catch (err) {
      console.log('Database not ready yet, retrying in 2 seconds...');
      retries--;
      await new Promise(res => setTimeout(res, 2000));
    }
  }
  throw new Error('Could not connect to the database.');
}



const server = express();

server.use(cors({
  origin: [
    "http://localhost:3000",
    "https://internox.duckdns.org"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));



server.use(express.json());
server.use('/new-user', userRouter);
server.use('/users', extractUserRouter);
// server.use('/new-company', companyRouter);
server.use('/company', extractCompany); 
server.use('/onboarding',onboardRoute);
server.use('/new-credentials', newToken);
server.use('/new-imap-credentials', newImapCreds);
server.use('/login', loginRoute);
server.use('/create-admin', createAdmin);
server.use('/create-company-admin', createCompanyAdmin);
server.use('/', fortnox);
server.use('/fortnox-data', fortnoxDataRoute);
server.use('/get-all-users', getAllUsers);
server.use('/get-imap', getImapRoute);

server.get('/fortnox-callback', async (req, res) => {
res.json('Success')
})


async function startServer() {
  try {
    await waitForDb();

    const port =  1222;
const host = '0.0.0.0';
    server.listen(port, host, () => {
      console.log(`Server is running on ${host}, port ${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

startServer();


