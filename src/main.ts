import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import masterPool from "./DATABASE/masterpool";
import onboardRoute from "./routes/onboardingRoute";
import userRouter from "./routes/newUserRoute";
import extractUserRouter from "./routes/extractUsersRoute";
// import companyRouter from './routes/newCompanyRoute';
import extractCompany from "./routes/CompanyRoute";
import newToken from "./routes/newCredentialsRoute";
import newImapCreds from "./routes/newImapCredentialsRoute";
import createAdmin from "./routes/createAdminRoute";
import loginRoute from "./routes/loginRoute";
import createCompanyAdmin from "./routes/createCompanyAdminRoute";
import fortnox from "./routes/fortnoxCallbackRoute";
import getAllUsers from "./routes/getAllUsersRoute";
import getImapRoute from "./routes/getImapRoute";
import fortnoxData from "./routes/fortnoxDataRoute";
import cookieParser from "cookie-parser";
import getEmails from "./routes/getSentEmailsRoute";
import swaggerUI from "swagger-ui-dist";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

dotenv.config();

async function waitForDb(retries = 5) {
  while (retries) {
    try {
      await masterPool.query("SELECT 1");
      console.log("Connected to database.");
      return;
    } catch (err) {
      console.log("Database not ready yet, retrying in 2 seconds...");
      retries--;
      await new Promise((res) => setTimeout(res, 2000));
    }
  }
  throw new Error("Could not connect to the database.");
}

const server = express();

server.use(
  cors({
    origin: ["http://localhost:3000", "https://internox.duckdns.org"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

server.use(express.json());
server.use(cookieParser());
// server.use(express.static(swaggerUI.getAbsoluteFSPath()));
server.use("/new-user", userRouter);
server.use("/users", extractUserRouter);
// server.use('/new-company', companyRouter);
server.use("/company", extractCompany);
server.use("/onboarding", onboardRoute);
server.use("/new-credentials", newToken);
server.use("/new-imap-credentials", newImapCreds);
server.use("/login", loginRoute);
server.use("/create-admin", createAdmin);
server.use("/create-company-admin", createCompanyAdmin);
server.use("/", fortnox);
server.use("/get-all-users", getAllUsers);
server.use("/get-imap", getImapRoute);
server.use("/fortnox-data", fortnoxData);
server.use("/get-sent-emails", getEmails);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Internox API",
      version: "1.0.0",
      description: `
## Internox API

This API handles:

- User authentication
- Company onboarding
- Fortnox integration with OAuth
- Data extraction

---

## Flow

1. Create superAdmin by running \`ts-node src/utils/generateToken.ts\` from root 
2. Use superAdmin bearer token in \`/onboarding\`to create a company
3. Use superAdmin bearer token in \`/create-company-admin\` to create a company admin for the company
4. Login as company admin \`/login\`
5. Use URL \`http://localhost:1222/auth?token=<JWT from login>\` with your token to connect your fortnox
6. Use company admin bearer token in \`/new-user\` to create a new user for the company (role == employee by default)
7. Use company admin bearer token in \`/fortnox-data\` to fetch fortnox data for the company, see documentation for endpoints.

---

## Features

- JWT-based authentication
- Bcrypt password hashing
- Multi-company support (multi-tenancy)
- External API integrations
- Role-based access control
- Swagger documentation
- Postgres multi-tenancy DB logic

---

`,
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

async function startServer() {
  try {
    await waitForDb();

    const port = 1222;
    const host = "0.0.0.0";
    server.listen(port, host, () => {
      console.log(`Server is running on ${host}, port ${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

startServer();
