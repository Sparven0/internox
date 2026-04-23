import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import bodyParser from "body-parser";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
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
import { getCompanyPool } from './DATABASE/connectionManager';
import fetchFortnoxForCompany from './DATABASE/INTEGRATIONS/Fortnox/fortnoxData';
import fetchSentEmailsFromYesterday from './DATABASE/INTEGRATIONS/Email/imapConnect';

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

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://internox.duckdns.org",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
// app.use(express.static(swaggerUI.getAbsoluteFSPath()));
app.use("/new-user", userRouter);
app.use("/users", extractUserRouter);
// app.use('/new-company', companyRouter);
app.use("/company", extractCompany);
app.use("/onboarding", onboardRoute);
app.use("/new-credentials", newToken);
app.use("/new-imap-credentials", newImapCreds);
app.use("/login", loginRoute);
app.use("/create-admin", createAdmin);
app.use("/create-company-admin", createCompanyAdmin);
app.use("/", fortnox);
app.use("/get-all-users", getAllUsers);
app.use("/get-imap", getImapRoute);
app.use("/fortnox-data", fortnoxData);
app.use("/get-sent-emails", getEmails);

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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/swagger.json", (_req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});


// Big init function to fetch everything 


async function startServer() {
  try {
    await waitForDb();
    await server.start();

    app.use(
      "/graphql",
      cors<cors.CorsRequest>(),
      bodyParser.json(),
      expressMiddleware(server, {
        context: async ({ req, res }) => {
          const token = req.headers.authorization?.split(" ")[1];
          let user: JwtPayload | undefined;
          if (token) {
            try {
              user = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
            } catch {}
          }
          return { req, res, db: masterPool, user };
        },
      }),
    );

    const port = 1222;
    const host = "0.0.0.0";
    app.listen(port, host, () => {
      console.log(`Server is running on ${host}, port ${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

app.get('/init-page', async (req, res) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ error: 'missing auth' });
    const token = String(auth).split(' ')[1];
    if (!token) return res.status(401).json({ error: 'missing token' });

    let payload: any;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET || '') as any;
    } catch (e) {
      return res.status(401).json({ error: 'invalid token' });
    }

    const companyId = payload?.tenantId || payload?.companyId || payload?.tenant || payload?.company;
    if (!companyId) return res.status(400).json({ error: 'company id not in token' });

    // resolve company DB
    const masterRes = await masterPool.query('SELECT db_name, name FROM companies WHERE id = $1', [companyId]);
    if (masterRes.rows.length === 0) return res.status(404).json({ error: 'company not found' });
    const companyDb = String(masterRes.rows[0].db_name).replace(/-/g, '_');
    const companyName = masterRes.rows[0].name;
    const pool = getCompanyPool(companyDb);

    // 1) users
    const usersRes = await pool.query('SELECT id, email, role FROM users');
    const users = usersRes.rows;

    // 2) fortnox customers
    let customers: any = 'not configured yet';
    try {
      const fdata = await fetchFortnoxForCompany(companyId, '/customers');
      customers = (fdata?.Customers || []).map((c: any) => ({ name: c.Name, email: c.Email }));
    } catch (e) {
      customers = 'not configured yet';
    }

// 3) emails — fetch for every user that has imap credentials
let emails: any = [];
try {
  const credRes = await pool.query(
    `SELECT id, user_id FROM imap_credentials`
  );

  if (credRes.rows.length === 0) {
    emails = 'not configured yet';
  } else {
    const results = await Promise.allSettled(
      credRes.rows.map((row) =>
        fetchSentEmailsFromYesterday(companyId, row.id)
        // credential id is passed — decryptPassword() handles the rest internally
      )
    );

    emails = results.map((r, i) => ({
      userId: credRes.rows[i].user_id,
      credentialId: credRes.rows[i].id,
      emails: r.status === 'fulfilled' ? r.value : [],
      error: r.status === 'rejected' ? r.reason?.message : null
    }));
  }
} catch (e) {
  emails = 'not configured yet';
}

    return res.json({ company: { id: companyId, name: companyName }, users, customers, emails });
  } catch (err) {
    console.error('init-page error:', err);
    return res.status(500).json({ error: 'failed to initialize' });
  }
});

startServer();
