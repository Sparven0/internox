const typeDefs = `
  scalar JSON

  type Company {
    id: ID!
    name: String!
    domain: String!
  }

  type User {
    id: ID!
    email: String!
    role: String!
    created_at: String
  }

  type ImapCredential {
    id: ID!
    user_id: String!
    imap_host: String!
    imap_port: Int!
    email_address: String!
  }

  type Query {
    getAllCompanies: [Company]
    getCompanyById(id: ID!): Company
    getCompanyByName(name: String!): Company
    getUsers(company: String!): [User]
    getUsersByCompanyId(companyId: String!): [User]
    getImapCredentials(company: String!): [ImapCredential]
    getFortnoxData(companyId: String!, endpoint: String): JSON
  }

  type Mutation {
    createCompany(name: String!, domain: String!): Company
  }
`;

export default typeDefs;
