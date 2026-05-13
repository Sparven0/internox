import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLContext } from '../graphql/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  companyId: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: Scalars['String']['output'];
};

export type Company = {
  __typename?: 'Company';
  domain: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Customer = {
  __typename?: 'Customer';
  domain?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fortnoxCustomerNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Email = {
  __typename?: 'Email';
  bccAddresses: Scalars['JSON']['output'];
  bodyHtml?: Maybe<Scalars['String']['output']>;
  bodyText?: Maybe<Scalars['String']['output']>;
  ccAddresses: Scalars['JSON']['output'];
  createdAt: Scalars['String']['output'];
  customerId?: Maybe<Scalars['ID']['output']>;
  direction: Scalars['String']['output'];
  fromAddress: Scalars['String']['output'];
  fromName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  inReplyTo?: Maybe<Scalars['String']['output']>;
  mailbox?: Maybe<Scalars['String']['output']>;
  messageId: Scalars['String']['output'];
  replyTo?: Maybe<Scalars['String']['output']>;
  sentAt?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  subject?: Maybe<Scalars['String']['output']>;
  threadId?: Maybe<Scalars['String']['output']>;
  toAddresses: Scalars['JSON']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
};

export type EmployeeCustomer = {
  __typename?: 'EmployeeCustomer';
  assignedAt: Scalars['String']['output'];
  customerId: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type FortnoxAccount = {
  __typename?: 'FortnoxAccount';
  accountNumber: Scalars['Int']['output'];
  active: Scalars['Boolean']['output'];
  balanceBroughtForward?: Maybe<Scalars['Float']['output']>;
  balanceCarriedForward?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  vatCode?: Maybe<Scalars['String']['output']>;
};

export type FortnoxFinancialYear = {
  __typename?: 'FortnoxFinancialYear';
  accountChartType?: Maybe<Scalars['String']['output']>;
  accountingMethod?: Maybe<Scalars['String']['output']>;
  fortnoxId: Scalars['Int']['output'];
  fromDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  toDate: Scalars['String']['output'];
};

export type FortnoxInvoice = {
  __typename?: 'FortnoxInvoice';
  bookedAt?: Maybe<Scalars['String']['output']>;
  currency: Scalars['String']['output'];
  customerNumber: Scalars['String']['output'];
  dueDate?: Maybe<Scalars['String']['output']>;
  invoiceDate: Scalars['String']['output'];
  invoiceNumber: Scalars['String']['output'];
  ourReference?: Maybe<Scalars['String']['output']>;
  rows: Array<FortnoxInvoiceRow>;
  status: Scalars['String']['output'];
  syncedAt: Scalars['String']['output'];
  totalExclVat?: Maybe<Scalars['Float']['output']>;
  totalInclVat?: Maybe<Scalars['Float']['output']>;
  vat?: Maybe<Scalars['Float']['output']>;
  yourReference?: Maybe<Scalars['String']['output']>;
};

export type FortnoxInvoiceRow = {
  __typename?: 'FortnoxInvoiceRow';
  articleNumber?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  rowNumber: Scalars['Int']['output'];
  total?: Maybe<Scalars['Float']['output']>;
  vatPercent?: Maybe<Scalars['Float']['output']>;
};

export type FortnoxVoucher = {
  __typename?: 'FortnoxVoucher';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  referenceNumber?: Maybe<Scalars['String']['output']>;
  referenceType?: Maybe<Scalars['String']['output']>;
  transactionDate: Scalars['String']['output'];
  voucherNumber: Scalars['Int']['output'];
  voucherSeries: Scalars['String']['output'];
};

export type FortnoxVoucherDetail = {
  __typename?: 'FortnoxVoucherDetail';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  referenceNumber?: Maybe<Scalars['String']['output']>;
  referenceType?: Maybe<Scalars['String']['output']>;
  rows: Array<FortnoxVoucherRow>;
  transactionDate: Scalars['String']['output'];
  voucherNumber: Scalars['Int']['output'];
  voucherSeries: Scalars['String']['output'];
};

export type FortnoxVoucherRow = {
  __typename?: 'FortnoxVoucherRow';
  accountNumber: Scalars['Int']['output'];
  credit?: Maybe<Scalars['Float']['output']>;
  debit?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export type ImapCredential = {
  __typename?: 'ImapCredential';
  email_address: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imap_host: Scalars['String']['output'];
  imap_port: Scalars['Int']['output'];
  user_id: Scalars['String']['output'];
};

export type ImapCredentialResult = {
  __typename?: 'ImapCredentialResult';
  id: Scalars['ID']['output'];
};

export type InitPageCompany = {
  __typename?: 'InitPageCompany';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type InitPageData = {
  __typename?: 'InitPageData';
  company: InitPageCompany;
  users: Array<InitUser>;
};

export type InitPageIntegrationData = {
  __typename?: 'InitPageIntegrationData';
  customers?: Maybe<Scalars['JSON']['output']>;
  emails?: Maybe<Scalars['JSON']['output']>;
};

export type InitUser = {
  __typename?: 'InitUser';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: Scalars['String']['output'];
};

export type InvoiceRecipientAlias = {
  __typename?: 'InvoiceRecipientAlias';
  alias: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  customer: Customer;
  customerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
};

export type Me = {
  __typename?: 'Me';
  companyId?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  dbName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role: Scalars['String']['output'];
  userName?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addImapCredentials: ImapCredentialResult;
  assignCustomerToEmployee: EmployeeCustomer;
  createAdmin: Scalars['String']['output'];
  createCompany?: Maybe<Company>;
  createCompanyAdmin: Scalars['String']['output'];
  createInvoiceRecipientAlias: InvoiceRecipientAlias;
  createUser: Scalars['String']['output'];
  deleteInvoiceRecipientAlias: Scalars['Boolean']['output'];
  login: AuthPayload;
  loginSuperAdmin: SuperAdminAuthPayload;
  logout: Scalars['String']['output'];
  onboardCompany: OnboardResult;
  removeCompany: Scalars['String']['output'];
  saveFortnoxTokens: Scalars['String']['output'];
  syncFortnox: Scalars['String']['output'];
  unassignCustomerFromEmployee: Scalars['String']['output'];
};


export type MutationAddImapCredentialsArgs = {
  companyDomain: Scalars['String']['input'];
  emailAddress: Scalars['String']['input'];
  imapHost: Scalars['String']['input'];
  imapPort?: InputMaybe<Scalars['Int']['input']>;
  password: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationAssignCustomerToEmployeeArgs = {
  customerId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateAdminArgs = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};


export type MutationCreateCompanyArgs = {
  domain: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateCompanyAdminArgs = {
  company: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateInvoiceRecipientAliasArgs = {
  alias: Scalars['String']['input'];
  customerId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  companyDomain: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationDeleteInvoiceRecipientAliasArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  companyDomain: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginSuperAdminArgs = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};


export type MutationOnboardCompanyArgs = {
  domain: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationRemoveCompanyArgs = {
  companyId: Scalars['ID']['input'];
};


export type MutationSaveFortnoxTokensArgs = {
  accessToken: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  expiresAt?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  service: Scalars['String']['input'];
};


export type MutationUnassignCustomerFromEmployeeArgs = {
  customerId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type OnboardResult = {
  __typename?: 'OnboardResult';
  companyId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
};

export type OnboardingStatus = {
  __typename?: 'OnboardingStatus';
  hasEmployees: Scalars['Boolean']['output'];
  hasFortnox: Scalars['Boolean']['output'];
  isComplete: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAccounts: Array<FortnoxAccount>;
  getAllCompanies?: Maybe<Array<Maybe<Company>>>;
  getAllCustomers: Array<Customer>;
  getCompanyById?: Maybe<Company>;
  getCompanyByName?: Maybe<Company>;
  getCustomersByEmployee: Array<Customer>;
  getEmailsByUser: Array<Email>;
  getEmployeesByCustomer: Array<User>;
  getFinancialYears: Array<FortnoxFinancialYear>;
  getFortnoxAuthUrl: Scalars['String']['output'];
  getFortnoxData?: Maybe<Scalars['JSON']['output']>;
  getImapCredentials?: Maybe<Array<Maybe<ImapCredential>>>;
  getInitPageData: InitPageData;
  getInitPageIntegrationData: InitPageIntegrationData;
  getInvoiceDetail?: Maybe<FortnoxInvoice>;
  getInvoices: Array<FortnoxInvoice>;
  getOnboardingStatus: OnboardingStatus;
  getSentEmails?: Maybe<Array<Maybe<SentEmail>>>;
  getUserActivityTimeline: Array<TimelineEvent>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  getUsersByCompanyId?: Maybe<Array<Maybe<User>>>;
  getVoucherDetail?: Maybe<FortnoxVoucherDetail>;
  getVouchers: Array<FortnoxVoucher>;
  invoiceRecipientAliases: Array<InvoiceRecipientAlias>;
  me?: Maybe<Me>;
};


export type QueryGetAccountsArgs = {
  financialYearId: Scalars['ID']['input'];
};


export type QueryGetCompanyByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCompanyByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetCustomersByEmployeeArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetEmailsByUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetEmployeesByCustomerArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryGetFortnoxDataArgs = {
  companyId: Scalars['String']['input'];
  endpoint?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetImapCredentialsArgs = {
  company: Scalars['String']['input'];
};


export type QueryGetInvoiceDetailArgs = {
  invoiceNumber: Scalars['String']['input'];
};


export type QueryGetInvoicesArgs = {
  customerNumber?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetSentEmailsArgs = {
  companyId: Scalars['String']['input'];
  credentialId: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserActivityTimelineArgs = {
  fromDate: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  toDate: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetUsersArgs = {
  company: Scalars['String']['input'];
};


export type QueryGetUsersByCompanyIdArgs = {
  companyId: Scalars['String']['input'];
};


export type QueryGetVoucherDetailArgs = {
  voucherId: Scalars['ID']['input'];
};


export type QueryGetVouchersArgs = {
  financialYearId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type SentEmail = {
  __typename?: 'SentEmail';
  date?: Maybe<Scalars['String']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  html?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  uid: Scalars['Int']['output'];
};

export type SuperAdminAuthPayload = {
  __typename?: 'SuperAdminAuthPayload';
  role: Scalars['String']['output'];
  userName: Scalars['String']['output'];
};

export type TimelineEmailActivity = {
  __typename?: 'TimelineEmailActivity';
  id: Scalars['ID']['output'];
  messageId?: Maybe<Scalars['String']['output']>;
  recipientEmail: Scalars['String']['output'];
  subject?: Maybe<Scalars['String']['output']>;
};

export type TimelineEvent = {
  __typename?: 'TimelineEvent';
  emailActivity?: Maybe<TimelineEmailActivity>;
  fortnoxVoucher?: Maybe<TimelineFortnoxVoucherBrief>;
  fortnoxInvoice?: Maybe<TimelineFortnoxInvoiceBrief>;
  kind: TimelineEventKind;
  mailSent?: Maybe<TimelineMailSent>;
  occurredAt: Scalars['String']['output'];
};

export enum TimelineEventKind {
  EmailActivity = 'EMAIL_ACTIVITY',
  FortnoxVoucher = 'FORTNOX_VOUCHER',
  FortnoxInvoice = 'FORTNOX_INVOICE',
  Mail = 'MAIL'
}

export type TimelineFortnoxInvoiceBrief = {
  __typename?: 'TimelineFortnoxInvoiceBrief';
  id: Scalars['ID']['output'];
  invoiceNumber: Scalars['String']['output'];
  customerNumber: Scalars['String']['output'];
  totalInclVat?: Maybe<Scalars['Float']['output']>;
  currency: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type TimelineFortnoxVoucherBrief = {
  __typename?: 'TimelineFortnoxVoucherBrief';
  description?: Maybe<Scalars['String']['output']>;
  financialYearId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  transactionDate: Scalars['String']['output'];
  voucherNumber: Scalars['Int']['output'];
  voucherSeries: Scalars['String']['output'];
};

export type TimelineMailSent = {
  __typename?: 'TimelineMailSent';
  fromAddress: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  messageId: Scalars['String']['output'];
  subject?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  created_at?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  role: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Company: ResolverTypeWrapper<Company>;
  Customer: ResolverTypeWrapper<Customer>;
  Email: ResolverTypeWrapper<Email>;
  EmployeeCustomer: ResolverTypeWrapper<EmployeeCustomer>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FortnoxAccount: ResolverTypeWrapper<FortnoxAccount>;
  FortnoxFinancialYear: ResolverTypeWrapper<FortnoxFinancialYear>;
  FortnoxInvoice: ResolverTypeWrapper<FortnoxInvoice>;
  FortnoxInvoiceRow: ResolverTypeWrapper<FortnoxInvoiceRow>;
  FortnoxVoucher: ResolverTypeWrapper<FortnoxVoucher>;
  FortnoxVoucherDetail: ResolverTypeWrapper<FortnoxVoucherDetail>;
  FortnoxVoucherRow: ResolverTypeWrapper<FortnoxVoucherRow>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImapCredential: ResolverTypeWrapper<ImapCredential>;
  ImapCredentialResult: ResolverTypeWrapper<ImapCredentialResult>;
  InitPageCompany: ResolverTypeWrapper<InitPageCompany>;
  InitPageData: ResolverTypeWrapper<InitPageData>;
  InitPageIntegrationData: ResolverTypeWrapper<InitPageIntegrationData>;
  InitUser: ResolverTypeWrapper<InitUser>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  InvoiceRecipientAlias: ResolverTypeWrapper<InvoiceRecipientAlias>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Me: ResolverTypeWrapper<Me>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  OnboardResult: ResolverTypeWrapper<OnboardResult>;
  OnboardingStatus: ResolverTypeWrapper<OnboardingStatus>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  SentEmail: ResolverTypeWrapper<SentEmail>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SuperAdminAuthPayload: ResolverTypeWrapper<SuperAdminAuthPayload>;
  TimelineEmailActivity: ResolverTypeWrapper<TimelineEmailActivity>;
  TimelineEvent: ResolverTypeWrapper<TimelineEvent>;
  TimelineEventKind: TimelineEventKind;
  TimelineFortnoxVoucherBrief: ResolverTypeWrapper<TimelineFortnoxVoucherBrief>;
  TimelineFortnoxInvoiceBrief: ResolverTypeWrapper<TimelineFortnoxInvoiceBrief>;
  TimelineMailSent: ResolverTypeWrapper<TimelineMailSent>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: AuthPayload;
  Boolean: Scalars['Boolean']['output'];
  Company: Company;
  Customer: Customer;
  Email: Email;
  EmployeeCustomer: EmployeeCustomer;
  Float: Scalars['Float']['output'];
  FortnoxAccount: FortnoxAccount;
  FortnoxFinancialYear: FortnoxFinancialYear;
  FortnoxInvoice: FortnoxInvoice;
  FortnoxInvoiceRow: FortnoxInvoiceRow;
  FortnoxVoucher: FortnoxVoucher;
  FortnoxVoucherDetail: FortnoxVoucherDetail;
  FortnoxVoucherRow: FortnoxVoucherRow;
  ID: Scalars['ID']['output'];
  ImapCredential: ImapCredential;
  ImapCredentialResult: ImapCredentialResult;
  InitPageCompany: InitPageCompany;
  InitPageData: InitPageData;
  InitPageIntegrationData: InitPageIntegrationData;
  InitUser: InitUser;
  Int: Scalars['Int']['output'];
  InvoiceRecipientAlias: InvoiceRecipientAlias;
  JSON: Scalars['JSON']['output'];
  Me: Me;
  Mutation: Record<PropertyKey, never>;
  OnboardResult: OnboardResult;
  OnboardingStatus: OnboardingStatus;
  Query: Record<PropertyKey, never>;
  SentEmail: SentEmail;
  String: Scalars['String']['output'];
  SuperAdminAuthPayload: SuperAdminAuthPayload;
  TimelineEmailActivity: TimelineEmailActivity;
  TimelineEvent: TimelineEvent;
  TimelineFortnoxVoucherBrief: TimelineFortnoxVoucherBrief;
  TimelineFortnoxInvoiceBrief: TimelineFortnoxInvoiceBrief;
  TimelineMailSent: TimelineMailSent;
  User: User;
};

export type AuthPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  companyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fortnoxCustomerNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type EmailResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Email'] = ResolversParentTypes['Email']> = {
  bccAddresses?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  bodyHtml?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bodyText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccAddresses?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  direction?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inReplyTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mailbox?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  messageId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  replyTo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sentAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  threadId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  toAddresses?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
};

export type EmployeeCustomerResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['EmployeeCustomer'] = ResolversParentTypes['EmployeeCustomer']> = {
  assignedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type FortnoxAccountResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['FortnoxAccount'] = ResolversParentTypes['FortnoxAccount']> = {
  accountNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  balanceBroughtForward?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  balanceCarriedForward?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vatCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type FortnoxFinancialYearResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['FortnoxFinancialYear'] = ResolversParentTypes['FortnoxFinancialYear']> = {
  accountChartType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  accountingMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fortnoxId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fromDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  toDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type FortnoxInvoiceResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['FortnoxInvoice'] = ResolversParentTypes['FortnoxInvoice']> = {
  bookedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dueDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoiceDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invoiceNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ourReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['FortnoxInvoiceRow']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  syncedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalExclVat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalInclVat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  yourReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type FortnoxInvoiceRowResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['FortnoxInvoiceRow'] = ResolversParentTypes['FortnoxInvoiceRow']> = {
  articleNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rowNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vatPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
};

export type FortnoxVoucherResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['FortnoxVoucher'] = ResolversParentTypes['FortnoxVoucher']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  referenceNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  referenceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactionDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voucherNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  voucherSeries?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type FortnoxVoucherDetailResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['FortnoxVoucherDetail'] = ResolversParentTypes['FortnoxVoucherDetail']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  referenceNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  referenceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['FortnoxVoucherRow']>, ParentType, ContextType>;
  transactionDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voucherNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  voucherSeries?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type FortnoxVoucherRowResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['FortnoxVoucherRow'] = ResolversParentTypes['FortnoxVoucherRow']> = {
  accountNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  credit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  debit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ImapCredentialResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ImapCredential'] = ResolversParentTypes['ImapCredential']> = {
  email_address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imap_host?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imap_port?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ImapCredentialResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ImapCredentialResult'] = ResolversParentTypes['ImapCredentialResult']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type InitPageCompanyResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['InitPageCompany'] = ResolversParentTypes['InitPageCompany']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InitPageDataResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['InitPageData'] = ResolversParentTypes['InitPageData']> = {
  company?: Resolver<ResolversTypes['InitPageCompany'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['InitUser']>, ParentType, ContextType>;
};

export type InitPageIntegrationDataResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['InitPageIntegrationData'] = ResolversParentTypes['InitPageIntegrationData']> = {
  customers?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  emails?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
};

export type InitUserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['InitUser'] = ResolversParentTypes['InitUser']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type InvoiceRecipientAliasResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['InvoiceRecipientAlias'] = ResolversParentTypes['InvoiceRecipientAlias']> = {
  alias?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = {
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  companyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dbName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addImapCredentials?: Resolver<ResolversTypes['ImapCredentialResult'], ParentType, ContextType, RequireFields<MutationAddImapCredentialsArgs, 'companyDomain' | 'emailAddress' | 'imapHost' | 'password' | 'userEmail'>>;
  assignCustomerToEmployee?: Resolver<ResolversTypes['EmployeeCustomer'], ParentType, ContextType, RequireFields<MutationAssignCustomerToEmployeeArgs, 'customerId' | 'userId'>>;
  createAdmin?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateAdminArgs, 'password' | 'userName'>>;
  createCompany?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationCreateCompanyArgs, 'domain' | 'name'>>;
  createCompanyAdmin?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateCompanyAdminArgs, 'company' | 'email' | 'password'>>;
  createInvoiceRecipientAlias?: Resolver<ResolversTypes['InvoiceRecipientAlias'], ParentType, ContextType, RequireFields<MutationCreateInvoiceRecipientAliasArgs, 'alias' | 'customerId'>>;
  createUser?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'companyDomain' | 'email' | 'password'>>;
  deleteInvoiceRecipientAlias?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteInvoiceRecipientAliasArgs, 'id'>>;
  login?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'companyDomain' | 'email' | 'password'>>;
  loginSuperAdmin?: Resolver<ResolversTypes['SuperAdminAuthPayload'], ParentType, ContextType, RequireFields<MutationLoginSuperAdminArgs, 'password' | 'userName'>>;
  logout?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  onboardCompany?: Resolver<ResolversTypes['OnboardResult'], ParentType, ContextType, RequireFields<MutationOnboardCompanyArgs, 'domain' | 'name'>>;
  removeCompany?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationRemoveCompanyArgs, 'companyId'>>;
  saveFortnoxTokens?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSaveFortnoxTokensArgs, 'accessToken' | 'companyName' | 'service'>>;
  syncFortnox?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unassignCustomerFromEmployee?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUnassignCustomerFromEmployeeArgs, 'customerId' | 'userId'>>;
};

export type OnboardResultResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OnboardResult'] = ResolversParentTypes['OnboardResult']> = {
  companyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type OnboardingStatusResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['OnboardingStatus'] = ResolversParentTypes['OnboardingStatus']> = {
  hasEmployees?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasFortnox?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAccounts?: Resolver<Array<ResolversTypes['FortnoxAccount']>, ParentType, ContextType, RequireFields<QueryGetAccountsArgs, 'financialYearId'>>;
  getAllCompanies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  getAllCustomers?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  getCompanyById?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<QueryGetCompanyByIdArgs, 'id'>>;
  getCompanyByName?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<QueryGetCompanyByNameArgs, 'name'>>;
  getCustomersByEmployee?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QueryGetCustomersByEmployeeArgs, 'userId'>>;
  getEmailsByUser?: Resolver<Array<ResolversTypes['Email']>, ParentType, ContextType, RequireFields<QueryGetEmailsByUserArgs, 'userId'>>;
  getEmployeesByCustomer?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetEmployeesByCustomerArgs, 'customerId'>>;
  getFinancialYears?: Resolver<Array<ResolversTypes['FortnoxFinancialYear']>, ParentType, ContextType>;
  getFortnoxAuthUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  getFortnoxData?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryGetFortnoxDataArgs, 'companyId'>>;
  getImapCredentials?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImapCredential']>>>, ParentType, ContextType, RequireFields<QueryGetImapCredentialsArgs, 'company'>>;
  getInitPageData?: Resolver<ResolversTypes['InitPageData'], ParentType, ContextType>;
  getInitPageIntegrationData?: Resolver<ResolversTypes['InitPageIntegrationData'], ParentType, ContextType>;
  getInvoiceDetail?: Resolver<Maybe<ResolversTypes['FortnoxInvoice']>, ParentType, ContextType, RequireFields<QueryGetInvoiceDetailArgs, 'invoiceNumber'>>;
  getInvoices?: Resolver<Array<ResolversTypes['FortnoxInvoice']>, ParentType, ContextType, Partial<QueryGetInvoicesArgs>>;
  getOnboardingStatus?: Resolver<ResolversTypes['OnboardingStatus'], ParentType, ContextType>;
  getSentEmails?: Resolver<Maybe<Array<Maybe<ResolversTypes['SentEmail']>>>, ParentType, ContextType, RequireFields<QueryGetSentEmailsArgs, 'companyId' | 'credentialId'>>;
  getUserActivityTimeline?: Resolver<Array<ResolversTypes['TimelineEvent']>, ParentType, ContextType, RequireFields<QueryGetUserActivityTimelineArgs, 'fromDate' | 'toDate' | 'userId'>>;
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryGetUsersArgs, 'company'>>;
  getUsersByCompanyId?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryGetUsersByCompanyIdArgs, 'companyId'>>;
  getVoucherDetail?: Resolver<Maybe<ResolversTypes['FortnoxVoucherDetail']>, ParentType, ContextType, RequireFields<QueryGetVoucherDetailArgs, 'voucherId'>>;
  getVouchers?: Resolver<Array<ResolversTypes['FortnoxVoucher']>, ParentType, ContextType, RequireFields<QueryGetVouchersArgs, 'financialYearId'>>;
  invoiceRecipientAliases?: Resolver<Array<ResolversTypes['InvoiceRecipientAlias']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>;
};

export type SentEmailResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SentEmail'] = ResolversParentTypes['SentEmail']> = {
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type SuperAdminAuthPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['SuperAdminAuthPayload'] = ResolversParentTypes['SuperAdminAuthPayload']> = {
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TimelineEmailActivityResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['TimelineEmailActivity'] = ResolversParentTypes['TimelineEmailActivity']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  messageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recipientEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type TimelineEventResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['TimelineEvent'] = ResolversParentTypes['TimelineEvent']> = {
  emailActivity?: Resolver<Maybe<ResolversTypes['TimelineEmailActivity']>, ParentType, ContextType>;
  fortnoxVoucher?: Resolver<Maybe<ResolversTypes['TimelineFortnoxVoucherBrief']>, ParentType, ContextType>;
  fortnoxInvoice?: Resolver<Maybe<ResolversTypes['TimelineFortnoxInvoiceBrief']>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['TimelineEventKind'], ParentType, ContextType>;
  mailSent?: Resolver<Maybe<ResolversTypes['TimelineMailSent']>, ParentType, ContextType>;
  occurredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TimelineFortnoxInvoiceBriefResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['TimelineFortnoxInvoiceBrief'] = ResolversParentTypes['TimelineFortnoxInvoiceBrief']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  invoiceNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalInclVat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TimelineFortnoxVoucherBriefResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['TimelineFortnoxVoucherBrief'] = ResolversParentTypes['TimelineFortnoxVoucherBrief']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  financialYearId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  transactionDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voucherNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  voucherSeries?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TimelineMailSentResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['TimelineMailSent'] = ResolversParentTypes['TimelineMailSent']> = {
  fromAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  messageId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  Email?: EmailResolvers<ContextType>;
  EmployeeCustomer?: EmployeeCustomerResolvers<ContextType>;
  FortnoxAccount?: FortnoxAccountResolvers<ContextType>;
  FortnoxFinancialYear?: FortnoxFinancialYearResolvers<ContextType>;
  FortnoxInvoice?: FortnoxInvoiceResolvers<ContextType>;
  FortnoxInvoiceRow?: FortnoxInvoiceRowResolvers<ContextType>;
  FortnoxVoucher?: FortnoxVoucherResolvers<ContextType>;
  FortnoxVoucherDetail?: FortnoxVoucherDetailResolvers<ContextType>;
  FortnoxVoucherRow?: FortnoxVoucherRowResolvers<ContextType>;
  ImapCredential?: ImapCredentialResolvers<ContextType>;
  ImapCredentialResult?: ImapCredentialResultResolvers<ContextType>;
  InitPageCompany?: InitPageCompanyResolvers<ContextType>;
  InitPageData?: InitPageDataResolvers<ContextType>;
  InitPageIntegrationData?: InitPageIntegrationDataResolvers<ContextType>;
  InitUser?: InitUserResolvers<ContextType>;
  InvoiceRecipientAlias?: InvoiceRecipientAliasResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Me?: MeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OnboardResult?: OnboardResultResolvers<ContextType>;
  OnboardingStatus?: OnboardingStatusResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SentEmail?: SentEmailResolvers<ContextType>;
  SuperAdminAuthPayload?: SuperAdminAuthPayloadResolvers<ContextType>;
  TimelineEmailActivity?: TimelineEmailActivityResolvers<ContextType>;
  TimelineEvent?: TimelineEventResolvers<ContextType>;
  TimelineFortnoxVoucherBrief?: TimelineFortnoxVoucherBriefResolvers<ContextType>;
  TimelineFortnoxInvoiceBrief?: TimelineFortnoxInvoiceBriefResolvers<ContextType>;
  TimelineMailSent?: TimelineMailSentResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

