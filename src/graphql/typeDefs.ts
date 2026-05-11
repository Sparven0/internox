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

  type Customer {
    id: ID!
    name: String!
    email: String
    domain: String
    fortnoxCustomerNumber: String
  }

  type InvoiceRecipientAlias {
    id: ID!
    alias: String!
    customerId: ID!
    customer: Customer!
    createdAt: String!
  }

  type EmployeeCustomer {
    userId: ID!
    customerId: ID!
    assignedAt: String!
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
    getOnboardingStatus: OnboardingStatus!
    getFinancialYears: [FortnoxFinancialYear!]!
    getAccounts(financialYearId: ID!): [FortnoxAccount!]!
    getVouchers(financialYearId: ID!, page: Int, limit: Int): [FortnoxVoucher!]!
    getVoucherDetail(voucherId: ID!): FortnoxVoucherDetail
    getInvoices(page: Int, limit: Int, status: String, customerNumber: String): [FortnoxInvoice!]!
    getInvoiceDetail(invoiceNumber: String!): FortnoxInvoice
    getFortnoxAuthUrl: String!
    getAllCustomers: [Customer!]!
    getCustomersByEmployee(userId: ID!): [Customer!]!
    getEmployeesByCustomer(customerId: ID!): [User!]!
    invoiceRecipientAliases: [InvoiceRecipientAlias!]!
    me: Me
  }

  type Me {
    id: ID!
    role: String!
    email: String
    userName: String
    companyId: String
    companyName: String
    dbName: String
  }

  type AuthPayload {
    id: ID!
    email: String!
    role: String!
    companyId: String!
  }

  type OnboardResult {
    companyId: ID!
    message: String!
  }

  type SuperAdminAuthPayload {
    userName: String!
    role: String!
  }

  type OnboardingStatus {
  hasFortnox: Boolean!
  hasEmployees: Boolean!
  isComplete: Boolean!
}

  type FortnoxFinancialYear {
    id: ID!
    fortnoxId: Int!
    fromDate: String!
    toDate: String!
    accountChartType: String
    accountingMethod: String
  }

  type FortnoxAccount {
    accountNumber: Int!
    description: String
    active: Boolean!
    balanceBroughtForward: Float
    balanceCarriedForward: Float
    vatCode: String
  }

  type FortnoxVoucher {
    id: ID!
    voucherSeries: String!
    voucherNumber: Int!
    transactionDate: String!
    description: String
    referenceType: String
    referenceNumber: String
  }

  type FortnoxInvoiceRow {
    rowNumber: Int!
    articleNumber: String
    description: String
    quantity: Float
    price: Float
    vatPercent: Float
    total: Float
  }

  type FortnoxInvoice {
    invoiceNumber: String!
    customerNumber: String!
    invoiceDate: String!
    dueDate: String
    totalExclVat: Float
    totalInclVat: Float
    vat: Float
    currency: String!
    status: String!
    ourReference: String
    yourReference: String
    syncedAt: String!
    bookedAt: String
    rows: [FortnoxInvoiceRow!]!
  }

  type FortnoxVoucherRow {
    accountNumber: Int!
    debit: Float
    credit: Float
    description: String
  }

  type FortnoxVoucherDetail {
    id: ID!
    voucherSeries: String!
    voucherNumber: Int!
    transactionDate: String!
    description: String
    referenceType: String
    referenceNumber: String
    rows: [FortnoxVoucherRow!]!
  }

  type Mutation {
    createCompany(name: String!, domain: String!): Company
    login(email: String!, password: String!, companyDomain: String!): AuthPayload!
    loginSuperAdmin(userName: String!, password: String!): SuperAdminAuthPayload!
    logout: String!
    onboardCompany(name: String!, domain: String!): OnboardResult!
    createCompanyAdmin(company: String!, email: String!, password: String!): String!
    createUser(email: String!, companyDomain: String!, password: String!): String!
    createAdmin(userName: String!, password: String!): String!
    addImapCredentials(companyDomain: String!, userEmail: String!, imapHost: String!, imapPort: Int, emailAddress: String!, password: String!): ImapCredentialResult!
    saveFortnoxTokens(companyName: String!, service: String!, accessToken: String!, refreshToken: String, expiresAt: String): String!
    removeCompany(companyId: ID!): String!
    assignCustomerToEmployee(customerId: ID!, userId: ID!): EmployeeCustomer!
    unassignCustomerFromEmployee(customerId: ID!, userId: ID!): String!
    syncFortnox: String!
    createInvoiceRecipientAlias(alias: String!, customerId: ID!): InvoiceRecipientAlias!
    deleteInvoiceRecipientAlias(id: ID!): Boolean!
  }
`;

export default typeDefs;
