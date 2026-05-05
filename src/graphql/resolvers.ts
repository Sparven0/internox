import { GraphQLError, GraphQLScalarType, Kind } from "graphql";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Resolvers } from "../__generated__/resolvers-types";
import { extractUser } from "../DATABASE/USERS/extractUserFunc";
import { getCompanyClient } from "../DATABASE/connectionManager";
import { onboardCompany } from "../DATABASE/onboard";
import { createCompanyAdmin as createCompanyAdminUtil } from "../utils/createCompanyAdmin";
import { getAllUsers } from "../DATABASE/USERS/getAllUsers";
import { masterClient } from "../DATABASE/masterpool";
import { extractImapCredentials } from "../DATABASE/INTEGRATIONS/Email/extractImapDetails";
import fetchFortnoxForCompany from "../DATABASE/INTEGRATIONS/Fortnox/fortnoxData";
import fetchSentEmailsFromYesterday from "../DATABASE/INTEGRATIONS/Email/imapConnect";
import { createUser } from "../DATABASE/USERS/insertUserFunc";
import { createAdmin } from "../DATABASE/USERS/insertAdminFunc";
import { addImapCredentials } from "../DATABASE/INTEGRATIONS/insertImapCredentials";
import { insertToken } from "../DATABASE/INTEGRATIONS/insertTokensFunc";

function requireAdmin(user: any) {
  if (!user || (user.role !== "admin" && user.role !== "super_admin")) {
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
    getCompanyById: async (_parent, { id }) => {
      return masterClient.company.findUnique({ where: { id } }) ?? null;
    },
    getAllCompanies: async () => {
      return masterClient.company.findMany();
    },
    getCompanyByName: async (_parent, { name }) => {
      return masterClient.company.findFirst({ where: { name } }) ?? null;
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
      return extractImapCredentials(company);
    },
    getFortnoxData: async (_parent, { companyId, endpoint }, { user }) => {
      requireAdmin(user);
      return await fetchFortnoxForCompany(companyId, endpoint ?? "/customers");
    },
    getSentEmails: async (
      _parent,
      { companyId, credentialId, password },
      { user },
    ) => {
      requireAdmin(user);
      const emails = await fetchSentEmailsFromYesterday(
        companyId,
        credentialId,
        password ?? undefined,
      );
      return emails as any[];
    },
    getInitPageData: async (_parent, _args, { user }) => {
      if (!user) {
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      }
      const companyId = (user as any).companyId;
      if (!companyId) {
        throw new GraphQLError("Company ID not found in token", {
          extensions: { code: "BAD_REQUEST" },
        });
      }

      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) {
        throw new GraphQLError("Company not found", {
          extensions: { code: "NOT_FOUND" },
        });
      }
      const users = await getCompanyClient(company.dbName).user.findMany({
        select: { id: true, email: true, role: true },
      });

      return {
        company: { id: companyId, name: company.name },
        users,
      };
    },
    getInitPageIntegrationData: async (_parent, _args, { user }) => {
      if (!user) {
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      }
      const companyId = (user as any).companyId;
      if (!companyId) {
        throw new GraphQLError("Company ID not found in token", {
          extensions: { code: "BAD_REQUEST" },
        });
      }

      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) {
        throw new GraphQLError("Company not found", {
          extensions: { code: "NOT_FOUND" },
        });
      }
      const companyClient = getCompanyClient(company.dbName);

      let customers: any;
      try {
        const fdata = await fetchFortnoxForCompany(companyId, "/customers");
        customers = (fdata?.Customers || []).map((c: any) => ({
          name: c.Name,
          email: c.Email,
        }));
      } catch {
        customers = "not configured yet";
      }

      let emails: any;
      try {
        const creds = await companyClient.imapCredential.findMany({
          select: { id: true, userId: true },
        });
        if (creds.length === 0) {
          emails = "not configured yet";
        } else {
          const results = await Promise.allSettled(
            creds.map((row) => fetchSentEmailsFromYesterday(companyId, row.id)),
          );
          emails = results.map((r, i) => ({
            userId: creds[i].userId,
            credentialId: creds[i].id,
            emails: r.status === "fulfilled" ? r.value : [],
            error:
              r.status === "rejected" ? (r.reason as Error)?.message : null,
          }));
        }
      } catch {
        emails = "not configured yet";
      }

      return { customers, emails };
    },
  },
  Mutation: {
    createCompany: async (_parent, { name, domain }, { user }) => {
      requireSuperAdmin(user);
      const companyId = await onboardCompany(name, domain);
      return masterClient.company.findUnique({ where: { id: companyId } });
    },
    onboardCompany: async (_parent, { name, domain }, { user }) => {
      requireSuperAdmin(user);
      const companyId = await onboardCompany(name, domain);
      return { companyId, message: "Company created successfully!" };
    },
    createCompanyAdmin: async (
      _parent,
      { company, email, password },
      { user },
    ) => {
      requireSuperAdmin(user);
      await createCompanyAdminUtil(company, email, password);
      return "Company admin created successfully";
    },
    login: async (_parent, { email, password, companyDomain }) => {
      const company = await masterClient.company.findUnique({
        where: { domain: companyDomain },
      });
      if (!company) {
        throw new GraphQLError("Company not found", {
          extensions: { code: "NOT_FOUND" },
        });
      }
      const companyUser = await getCompanyClient(
        company.dbName,
      ).user.findUnique({ where: { email } });
      if (!companyUser) {
        throw new GraphQLError("Invalid credentials", {
          extensions: { code: "UNAUTHORIZED" },
        });
      }
      const passwordMatch = await bcrypt.compare(
        password,
        companyUser.password,
      );
      if (!passwordMatch) {
        throw new GraphQLError("Invalid credentials", {
          extensions: { code: "UNAUTHORIZED" },
        });
      }
      if (companyUser.role !== "admin") {
        throw new GraphQLError("Access denied: Admins only", {
          extensions: { code: "FORBIDDEN" },
        });
      }
      const token = jwt.sign(
        {
          id: companyUser.id,
          email: companyUser.email,
          role: companyUser.role,
          companyId: companyUser.companyId,
          dbName: company.dbName,
          companyName: company.name,
        },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" },
      );
      return {
        token,
        id: companyUser.id,
        email: companyUser.email,
        role: companyUser.role,
        companyId: companyUser.companyId,
      };
    },
    loginSuperAdmin: async (_parent, { userName, password }) => {
      const masterUser = await masterClient.user.findFirst({
        where: { userName, role: "super_admin" },
      });
      if (!masterUser) {
        throw new GraphQLError("Invalid credentials", {
          extensions: { code: "UNAUTHORIZED" },
        });
      }
      const passwordMatch = await bcrypt.compare(password, masterUser.password);
      if (!passwordMatch) {
        throw new GraphQLError("Invalid credentials", {
          extensions: { code: "UNAUTHORIZED" },
        });
      }
      const token = jwt.sign(
        {
          id: masterUser.id,
          userName: masterUser.userName,
          role: masterUser.role,
        },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" },
      );
      return { token, userName: masterUser.userName, role: masterUser.role };
    },
    createUser: async (
      _parent,
      { email, companyDomain, password },
      { user },
    ) => {
      requireAdmin(user);
      if (user!.role !== "super_admin") {
        const targetCompany = await masterClient.company.findUnique({
          where: { domain: companyDomain },
        });
        if (!targetCompany || targetCompany.id !== (user as any).companyId) {
          throw new GraphQLError(
            "Forbidden: you can only create users for your own company",
            {
              extensions: { code: "FORBIDDEN" },
            },
          );
        }
      }
      await createUser(email, companyDomain, password);
      return "User created successfully";
    },
    createAdmin: async (_parent, { userName, password }, { user, req }) => {
      requireSuperAdmin(user);
      const token = req.headers.authorization?.split(" ")[1]!;
      await createAdmin(userName, password, token);
      return "Admin created successfully";
    },
    addImapCredentials: async (_parent, { companyDomain, userEmail, imapHost, imapPort, emailAddress, password }, { user }) => {
  requireAdmin(user);

  // Slå upp företaget via domän först
  const company = await masterClient.company.findUnique({ where: { domain: companyDomain } });
  if (!company) throw new GraphQLError(`Company not found for domain: ${companyDomain}`);

  const result = await addImapCredentials(
    company.name,  // ← skicka name, inte domain
    userEmail,
    imapHost,
    imapPort ?? 993,
    emailAddress,
    password,
  );
  return { id: result.id };
},
    saveFortnoxTokens: async (
      _parent,
      { companyName, service, accessToken, refreshToken, expiresAt },
      { user },
    ) => {
      requireAdmin(user);
      await insertToken(companyName, {
        service,
        access_token: accessToken,
        refresh_token: refreshToken ?? undefined,
        expires_at: expiresAt ?? undefined,
      });
      return "Tokens saved successfully";
    },
  },
};

export default resolvers;
