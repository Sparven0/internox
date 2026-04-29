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

  type InitPageCompany {
    id: ID!
    name: String!
  }

  type InitUser {
    id: ID!
    email: String!
    role: String!
  }

  type InitPageData {
    company: InitPageCompany!
    users: [InitUser!]!
  }

  type InitPageIntegrationData {
    customers: JSON
    emails: JSON
  }

  type SentEmail {
    uid: Int!
    subject: String
    from: String
    to: String
    date: String
    text: String
    html: String
  }

  type ImapCredentialResult {
    id: ID!
  }

  type Query {
    getAllCompanies: [Company]
    getCompanyById(id: ID!): Company
    getCompanyByName(name: String!): Company
    getUsers(company: String!): [User]
    getUsersByCompanyId(companyId: String!): [User]
    getImapCredentials(company: String!): [ImapCredential]
    getFortnoxData(companyId: String!, endpoint: String): JSON
    getInitPageData: InitPageData!
    getInitPageIntegrationData: InitPageIntegrationData!
    getSentEmails(companyId: String!, credentialId: String!, password: String): [SentEmail]
  }

  type AuthPayload {
    token: String!
    id: ID!
    email: String!
    role: String!
    companyId: String!
  }

  type OnboardResult {
    companyId: ID!
    message: String!
  }

  type Mutation {
    createCompany(name: String!, domain: String!): Company
    login(email: String!, password: String!, companyDomain: String!): AuthPayload!
    onboardCompany(name: String!, domain: String!): OnboardResult!
    createCompanyAdmin(company: String!, email: String!, password: String!): String!
    createUser(email: String!, companyDomain: String!, password: String!): String!
    createAdmin(userName: String!, password: String!): String!
    addImapCredentials(companyDomain: String!, userEmail: String!, imapHost: String!, imapPort: Int, emailAddress: String!, password: String!): ImapCredentialResult!
    saveFortnoxTokens(companyName: String!, service: String!, accessToken: String!, refreshToken: String, expiresAt: String): String!
  }
`;

export default typeDefs;
