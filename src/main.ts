import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import masterPool from "./DATABASE/masterpool";
import fortnoxOAuth from "./routes/fortnoxCallbackRoute";

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
      "https://studio.apollographql.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// OAuth routes must stay as REST (browser redirects + cookies)
app.use("/", fortnoxOAuth);

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
          return { req, res, user };
        },
      }),
    );

    const port = 1222;
    const host = "0.0.0.0";
    app.listen(port, host, () => {
      console.log(`Server is running on ${host}, port ${port}`);
      console.log(`GraphQL endpoint: http://${host}:${port}/graphql`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

startServer();
