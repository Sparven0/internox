import { GraphQLError, GraphQLScalarType, Kind } from "graphql";
import { Resolvers } from "../__generated__/resolvers-types";
import { extractUser } from "../DATABASE/USERS/extractUserFunc";
import { getAllUsers } from "../DATABASE/USERS/getAllUsers";
import { extractCompany } from "../DATABASE/COMPANIES/extractCompanyFunc";
import { extractImapCredentials } from "../DATABASE/INTEGRATIONS/Email/extractImapDetails";
import fetchFortnoxForCompany from "../DATABASE/INTEGRATIONS/Fortnox/fortnoxData";

function requireAdmin(user: any) {
  if (!user || user.role !== "admin") {
    throw new GraphQLError("Forbidden", {
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
  },
  Mutation: {
    createCompany: async (_parent, { name, domain }, { db }) => {
      const result = await db.query(
        "INSERT INTO companies (name, domain) VALUES ($1, $2) RETURNING *",
        [name, domain],
      );
      return result.rows[0];
    },
  },
};

export default resolvers;
