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
  token: Scalars['String']['output'];
};

export type Company = {
  __typename?: 'Company';
  domain: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
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

export type Mutation = {
  __typename?: 'Mutation';
  addImapCredentials: ImapCredentialResult;
  createAdmin: Scalars['String']['output'];
  createCompany?: Maybe<Company>;
  createCompanyAdmin: Scalars['String']['output'];
  createUser: Scalars['String']['output'];
  login: AuthPayload;
  loginSuperAdmin: SuperAdminAuthPayload;
  onboardCompany: OnboardResult;
  saveFortnoxTokens: Scalars['String']['output'];
};


export type MutationAddImapCredentialsArgs = {
  companyDomain: Scalars['String']['input'];
  emailAddress: Scalars['String']['input'];
  imapHost: Scalars['String']['input'];
  imapPort?: InputMaybe<Scalars['Int']['input']>;
  password: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
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


export type MutationCreateUserArgs = {
  companyDomain: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
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


export type MutationSaveFortnoxTokensArgs = {
  accessToken: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  expiresAt?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  service: Scalars['String']['input'];
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
  getAllCompanies?: Maybe<Array<Maybe<Company>>>;
  getCompanyById?: Maybe<Company>;
  getCompanyByName?: Maybe<Company>;
  getFortnoxData?: Maybe<Scalars['JSON']['output']>;
  getImapCredentials?: Maybe<Array<Maybe<ImapCredential>>>;
  getInitPageData: InitPageData;
  getInitPageIntegrationData: InitPageIntegrationData;
  getOnboardingStatus: OnboardingStatus;
  getSentEmails?: Maybe<Array<Maybe<SentEmail>>>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  getUsersByCompanyId?: Maybe<Array<Maybe<User>>>;
};


export type QueryGetCompanyByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCompanyByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetFortnoxDataArgs = {
  companyId: Scalars['String']['input'];
  endpoint?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetImapCredentialsArgs = {
  company: Scalars['String']['input'];
};


export type QueryGetSentEmailsArgs = {
  companyId: Scalars['String']['input'];
  credentialId: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUsersArgs = {
  company: Scalars['String']['input'];
};


export type QueryGetUsersByCompanyIdArgs = {
  companyId: Scalars['String']['input'];
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
  token: Scalars['String']['output'];
  userName: Scalars['String']['output'];
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
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImapCredential: ResolverTypeWrapper<ImapCredential>;
  ImapCredentialResult: ResolverTypeWrapper<ImapCredentialResult>;
  InitPageCompany: ResolverTypeWrapper<InitPageCompany>;
  InitPageData: ResolverTypeWrapper<InitPageData>;
  InitPageIntegrationData: ResolverTypeWrapper<InitPageIntegrationData>;
  InitUser: ResolverTypeWrapper<InitUser>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  OnboardResult: ResolverTypeWrapper<OnboardResult>;
  OnboardingStatus: ResolverTypeWrapper<OnboardingStatus>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  SentEmail: ResolverTypeWrapper<SentEmail>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SuperAdminAuthPayload: ResolverTypeWrapper<SuperAdminAuthPayload>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: AuthPayload;
  Boolean: Scalars['Boolean']['output'];
  Company: Company;
  ID: Scalars['ID']['output'];
  ImapCredential: ImapCredential;
  ImapCredentialResult: ImapCredentialResult;
  InitPageCompany: InitPageCompany;
  InitPageData: InitPageData;
  InitPageIntegrationData: InitPageIntegrationData;
  InitUser: InitUser;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  Mutation: Record<PropertyKey, never>;
  OnboardResult: OnboardResult;
  OnboardingStatus: OnboardingStatus;
  Query: Record<PropertyKey, never>;
  SentEmail: SentEmail;
  String: Scalars['String']['output'];
  SuperAdminAuthPayload: SuperAdminAuthPayload;
  User: User;
};

export type AuthPayloadResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  companyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addImapCredentials?: Resolver<ResolversTypes['ImapCredentialResult'], ParentType, ContextType, RequireFields<MutationAddImapCredentialsArgs, 'companyDomain' | 'emailAddress' | 'imapHost' | 'password' | 'userEmail'>>;
  createAdmin?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateAdminArgs, 'password' | 'userName'>>;
  createCompany?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationCreateCompanyArgs, 'domain' | 'name'>>;
  createCompanyAdmin?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateCompanyAdminArgs, 'company' | 'email' | 'password'>>;
  createUser?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'companyDomain' | 'email' | 'password'>>;
  login?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'companyDomain' | 'email' | 'password'>>;
  loginSuperAdmin?: Resolver<ResolversTypes['SuperAdminAuthPayload'], ParentType, ContextType, RequireFields<MutationLoginSuperAdminArgs, 'password' | 'userName'>>;
  onboardCompany?: Resolver<ResolversTypes['OnboardResult'], ParentType, ContextType, RequireFields<MutationOnboardCompanyArgs, 'domain' | 'name'>>;
  saveFortnoxTokens?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSaveFortnoxTokensArgs, 'accessToken' | 'companyName' | 'service'>>;
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
  getAllCompanies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  getCompanyById?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<QueryGetCompanyByIdArgs, 'id'>>;
  getCompanyByName?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<QueryGetCompanyByNameArgs, 'name'>>;
  getFortnoxData?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryGetFortnoxDataArgs, 'companyId'>>;
  getImapCredentials?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImapCredential']>>>, ParentType, ContextType, RequireFields<QueryGetImapCredentialsArgs, 'company'>>;
  getInitPageData?: Resolver<ResolversTypes['InitPageData'], ParentType, ContextType>;
  getInitPageIntegrationData?: Resolver<ResolversTypes['InitPageIntegrationData'], ParentType, ContextType>;
  getOnboardingStatus?: Resolver<ResolversTypes['OnboardingStatus'], ParentType, ContextType>;
  getSentEmails?: Resolver<Maybe<Array<Maybe<ResolversTypes['SentEmail']>>>, ParentType, ContextType, RequireFields<QueryGetSentEmailsArgs, 'companyId' | 'credentialId'>>;
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryGetUsersArgs, 'company'>>;
  getUsersByCompanyId?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryGetUsersByCompanyIdArgs, 'companyId'>>;
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
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  ImapCredential?: ImapCredentialResolvers<ContextType>;
  ImapCredentialResult?: ImapCredentialResultResolvers<ContextType>;
  InitPageCompany?: InitPageCompanyResolvers<ContextType>;
  InitPageData?: InitPageDataResolvers<ContextType>;
  InitPageIntegrationData?: InitPageIntegrationDataResolvers<ContextType>;
  InitUser?: InitUserResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  OnboardResult?: OnboardResultResolvers<ContextType>;
  OnboardingStatus?: OnboardingStatusResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SentEmail?: SentEmailResolvers<ContextType>;
  SuperAdminAuthPayload?: SuperAdminAuthPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

