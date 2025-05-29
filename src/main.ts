import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
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


dotenv.config();

const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'key.pem')), 
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem')), 
}


const server = express();
server.use(cors());
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
server.use('/fortnox', fortnox);








// server.listen(process.env.PORT || 3000, () => {
//     console.log(`Server is running on port ${process.env.PORT || 3000}`);
// }
// )



https.createServer(sslOptions, server).listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
})


http.createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
    res.end();
  }).listen(80, () => {
    console.log('HTTP Server is redirecting to HTTPS');
  });