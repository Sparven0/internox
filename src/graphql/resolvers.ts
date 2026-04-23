import { GraphQLError, GraphQLScalarType, Kind } from "graphql";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Resolvers } from "../__generated__/resolvers-types";
import { extractUser } from "../DATABASE/USERS/extractUserFunc";
import { getCompanyPool } from "../DATABASE/connectionManager";
import { onboardCompany } from "../DATABASE/onboard";
import { createCompanyAdmin as createCompanyAdminUtil } from "../utils/createCompanyAdmin";
import { getAllUsers } from "../DATABASE/USERS/getAllUsers";
import { extractCompany } from "../DATABASE/COMPANIES/extractCompanyFunc";
import { extractImapCredentials } from "../DATABASE/INTEGRATIONS/Email/extractImapDetails";
import fetchFortnoxForCompany from "../DATABASE/INTEGRATIONS/Fortnox/fortnoxData";
import fetchSentEmailsFromYesterday from "../DATABASE/INTEGRATIONS/Email/imapConnect";

function requireAdmin(user: any) {
  if (!user || user.role !== "admin") {
    throw new GraphQLError("Forbidden", {
      extensions: { code: "FORBIDDEN" },
    });
  }
}

function requireSuperAdmin(user: any) {
  if (!user || user.role !== "super_admin") {
    throw new GraphQLError("Forbidden: Super admin access required", {
      extensions: { code: "FORBIDDEN" },
    });
  }
}

const JSONScalar = new GraphQLScalarType({
  name: "JSON",
  description: "Arbitrary JSON value",
  serialize: (value) => value,
  parseValue: (value) => value,
  parseLiteral: (ast) => {
    if (ast.kind === Kind.STRING) return JSON.parse(ast.value);
    return null;
  },
});

const resolvers: Resolvers = {
  JSON: JSONScalar,
  Query: {
    getCompanyById: async (_parent, { id }, { db }) => {
      const result = await db.query("SELECT * FROM companies WHERE id = $1", [id]);
      return result.rows[0];
    },
    getAllCompanies: async (_parent, _args, { db }) => {
      const result = await db.query("SELECT * FROM companies");
      return result.rows;
    },
    getCompanyByName: async (_parent, { name }) => {
      const result = await extractCompany(name);
      return result.rows[0] ?? null;
    },
    getUsers: async (_parent, { company }, { user }) => {
      requireAdmin(user);
      return await extractUser(company);
    },
    getUsersByCompanyId: async (_parent, { companyId }, { user }) => {
      requireAdmin(user);
      return await getAllUsers(companyId);
    },
    getImapCredentials: async (_parent, { company }, { user }) => {
      requireAdmin(user);
      const result = await extractImapCredentials(company);
      return result.rows;
    },
    getFortnoxData: async (_parent, { companyId, endpoint }, { user }) => {
      requireAdmin(user);
      return await fetchFortnoxForCompany(companyId, endpoint ?? "/customers");
    },
    getInitPageData: async (_parent, _args, { user, db }) => {
      if (!user) {
        throw new GraphQLError("Unauthorized", { extensions: { code: "UNAUTHORIZED" } });
      }
      const companyId = (user as any).companyId;
      if (!companyId) {
        throw new GraphQLError("Company ID not found in token", { extensions: { code: "BAD_REQUEST" } });
      }

      const masterRes = await db.query(
        "SELECT db_name, name FROM companies WHERE id = $1",
        [companyId],
      );
      if (masterRes.rows.length === 0) {
        throw new GraphQLError("Company not found", { extensions: { code: "NOT_FOUND" } });
      }
      const companyDb = String(masterRes.rows[0].db_name).replace(/-/g, "_");
      const companyName = masterRes.rows[0].name;
      const pool = getCompanyPool(companyDb);

      const usersRes = await pool.query("SELECT id, email, role FROM users");

      let customers: any;
      try {
        const fdata = await fetchFortnoxForCompany(companyId, "/customers");
        customers = (fdata?.Customers || []).map((c: any) => ({ name: c.Name, email: c.Email }));
      } catch {
        customers = "not configured yet";
      }

      let emails: any;
      try {
        const credRes = await pool.query("SELECT id, user_id FROM imap_credentials");
        if (credRes.rows.length === 0) {
          emails = "not configured yet";
        } else {
          const results = await Promise.allSettled(
            credRes.rows.map((row) => fetchSentEmailsFromYesterday(companyId, row.id)),
          );
          emails = results.map((r, i) => ({
            userId: credRes.rows[i].user_id,
            credentialId: credRes.rows[i].id,
            emails: r.status === "fulfilled" ? r.value : [],
            error: r.status === "rejected" ? (r.reason as Error)?.message : null,
          }));
        }
      } catch {
        emails = "not configured yet";
      }

      return {
        company: { id: companyId, name: companyName },
        users: usersRes.rows,
        customers,
        emails,
      };
    },
  },
  Mutation: {
    createCompany: async (_parent, { name, domain }, { db }) => {
      const result = await db.query(
        "INSERT INTO companies (name, domain) VALUES ($1, $2) RETURNING *",
        [name, domain],
      );
      return result.rows[0];
    },
    onboardCompany: async (_parent, { name, domain }, { user }) => {
      requireSuperAdmin(user);
      const companyId = await onboardCompany(name, domain);
      return { companyId, message: "Company created successfully!" };
    },
    createCompanyAdmin: async (_parent, { company, email, password }, { user }) => {
      requireSuperAdmin(user);
      await createCompanyAdminUtil(company, email, password);
      return "Company admin created successfully";
    },
    login: async (_parent, { email, password, companyDomain }, { db }) => {
      const companyResult = await db.query(
        "SELECT db_name, name FROM companies WHERE domain = $1",
        [companyDomain],
      );
      if (companyResult.rowCount === 0) {
        throw new GraphQLError("Company not found", { extensions: { code: "NOT_FOUND" } });
      }
      const { db_name: dbName, name: companyName } = companyResult.rows[0];
      const companyPool = getCompanyPool(dbName);
      const userResult = await companyPool.query(
        "SELECT * FROM users WHERE email = $1",
        [email],
      );
      if (userResult.rowCount === 0) {
        throw new GraphQLError("Invalid credentials", { extensions: { code: "UNAUTHORIZED" } });
      }
      const user = userResult.rows[0];
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new GraphQLError("Invalid credentials", { extensions: { code: "UNAUTHORIZED" } });
      }
      if (user.role !== "admin") {
        throw new GraphQLError("Access denied: Admins only", { extensions: { code: "FORBIDDEN" } });
      }
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role, companyId: user.company_id, dbName, companyName },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" },
      );
      return { token, id: user.id, email: user.email, role: user.role, companyId: user.company_id };
    },
  },
};

export default resolvers;
