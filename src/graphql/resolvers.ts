import { GraphQLError, GraphQLScalarType, Kind } from "graphql";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Resolvers } from "../__generated__/resolvers-types";
import { extractUser } from "../DATABASE/USERS/extractUserFunc";
import { getCompanyClient } from "../DATABASE/connectionManager";
import { onboardCompany } from "../DATABASE/onboard";
import { removeCompany } from "../DATABASE/COMPANIES/removeCompany";
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
import {
  syncFortnoxData,
  syncFortnoxInvoiceRows,
} from "../DATABASE/INTEGRATIONS/Fortnox/syncFortnoxData";

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
    me: (_parent, _args, { user }) => {
      if (!user) return null;
      return {
        id: (user as any).id,
        role: (user as any).role,
        email: (user as any).email ?? null,
        userName: (user as any).userName ?? null,
        companyId: (user as any).companyId ?? null,
        companyName: (user as any).companyName ?? null,
        dbName: (user as any).dbName ?? null,
      };
    },
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
    getFinancialYears: async (_parent, _args, { user }) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      const rows = await client.fortnoxFinancialYear.findMany({
        orderBy: { fromDate: "desc" },
      });
      return rows.map((r) => ({
        ...r,
        fromDate: r.fromDate.toISOString(),
        toDate: r.toDate.toISOString(),
      }));
    },
    getAccounts: async (_parent, args, { user }) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      const rows = await client.fortnoxAccount.findMany({
        where: { financialYearId: args.financialYearId },
        orderBy: { accountNumber: "asc" },
      });
      return rows.map((r) => ({
        ...r,
        balanceBroughtForward:
          r.balanceBroughtForward != null
            ? Number(r.balanceBroughtForward)
            : null,
        balanceCarriedForward:
          r.balanceCarriedForward != null
            ? Number(r.balanceCarriedForward)
            : null,
      }));
    },
    getVouchers: async (_parent, args, { user }) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      const page = args.page ?? 1;
      const limit = args.limit ?? 50;
      const rows = await client.fortnoxVoucher.findMany({
        where: { financialYearId: args.financialYearId },
        orderBy: { transactionDate: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      });
      return rows.map((r) => ({
        ...r,
        transactionDate: r.transactionDate.toISOString(),
      }));
    },
    getCustomersByEmployee: async (_parent, { userId }, { user }) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      requireAdmin(user);
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      const links = await client.employeeCustomer.findMany({
        where: { userId },
        include: { customer: true },
      });
      return links.map((l) => l.customer);
    },
    getEmployeesByCustomer: async (_parent, { customerId }, { user }) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      requireAdmin(user);
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      const links = await client.employeeCustomer.findMany({
        where: { customerId },
        include: { user: true },
      });
      return links.map((l) => l.user);
    },
    getAllCustomers: async (_parent, _args, { user }) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      requireAdmin(user);
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      return client.customer.findMany({ orderBy: { name: "asc" } });
    },
    getInvoices: async (_parent, args, { user }) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      const page = args.page ?? 1;
      const limit = args.limit ?? 50;
      const where: any = {};
      if (args.status) where.status = args.status;
      if (args.customerNumber) where.customerNumber = args.customerNumber;
      const invoices = await client.fortnoxInvoice.findMany({
        where,
        orderBy: { invoiceDate: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        include: { rows: { orderBy: { rowNumber: "asc" } } },
      });
      return invoices.map((inv) => ({
        ...inv,
        invoiceDate: inv.invoiceDate.toISOString(),
        dueDate: inv.dueDate?.toISOString() ?? null,
        syncedAt: inv.syncedAt.toISOString(),
        bookedAt: inv.sentAt?.toISOString() ?? null,
        totalExclVat: inv.totalExclVat != null ? Number(inv.totalExclVat) : null,
        totalInclVat: inv.totalInclVat != null ? Number(inv.totalInclVat) : null,
        vat: inv.vat != null ? Number(inv.vat) : null,
        rows: inv.rows.map((r) => ({
          ...r,
          rowNumber: r.rowNumber ?? 0,
          quantity: r.quantity != null ? Number(r.quantity) : null,
          price: r.price != null ? Number(r.price) : null,
          vatPercent: r.vatPercent != null ? Number(r.vatPercent) : null,
          total: r.total != null ? Number(r.total) : null,
        })),
      })) as any[];
    },
    getInvoiceDetail: async (_parent, args, { user }) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      // On-demand fallback: fetch from Fortnox if rows haven't been synced yet
      const existing = await client.fortnoxInvoiceRow.count({
        where: { invoiceNumber: args.invoiceNumber },
      });
      if (existing === 0) {
        await syncFortnoxInvoiceRows(companyId, args.invoiceNumber);
      }
      const inv = await client.fortnoxInvoice.findUnique({
        where: { invoiceNumber: args.invoiceNumber },
        include: { rows: { orderBy: { rowNumber: "asc" } } },
      });
      if (!inv) return null;
      return {
        ...inv,
        invoiceDate: inv.invoiceDate.toISOString(),
        dueDate: inv.dueDate?.toISOString() ?? null,
        syncedAt: inv.syncedAt.toISOString(),
        bookedAt: inv.sentAt?.toISOString() ?? null,
        totalExclVat: inv.totalExclVat != null ? Number(inv.totalExclVat) : null,
        totalInclVat: inv.totalInclVat != null ? Number(inv.totalInclVat) : null,
        vat: inv.vat != null ? Number(inv.vat) : null,
        rows: inv.rows.map((r) => ({
          ...r,
          rowNumber: r.rowNumber ?? 0,
          quantity: r.quantity != null ? Number(r.quantity) : null,
          price: r.price != null ? Number(r.price) : null,
          vatPercent: r.vatPercent != null ? Number(r.vatPercent) : null,
          total: r.total != null ? Number(r.total) : null,
        })),
      } as any;
    },

    getFortnoxAuthUrl: async (_parent, _args, { user }) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      const companyName = (user as any).companyName;
      if (!companyName) throw new GraphQLError("Company name missing from token");
      // Sign a short-lived JWT containing just the company name, same as the /auth route expects
      const stateToken = jwt.sign({ companyName }, process.env.JWT_SECRET!, { expiresIn: "10m" });
      const baseUrl = process.env.APP_BASE_URL ?? "http://localhost:1222";
      return `${baseUrl}/auth?token=${stateToken}`;
    },

    getVoucherDetail: async (_parent, args, { user }) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      const v = await client.fortnoxVoucher.findUnique({
        where: { id: args.voucherId },
        include: { rows: true },
      });
      if (!v) return null;
      return {
        ...v,
        transactionDate: v.transactionDate.toISOString(),
        rows: v.rows.map((r) => ({
          ...r,
          debit: r.debit != null ? Number(r.debit) : null,
          credit: r.credit != null ? Number(r.credit) : null,
        })),
      };
    },
    getOnboardingStatus: async (_parent, _args, { user }) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });

      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) throw new GraphQLError("Company not found");

      const client = getCompanyClient(company.dbName);

      const fortnox = await client.companyIntegration.findFirst({
        where: { service: { equals: "Fortnox", mode: "insensitive" } },
      });

      const employeeCount = await client.user.count();

      return {
        hasFortnox: !!fortnox,
        hasEmployees: employeeCount > 0,
        isComplete: !!fortnox && employeeCount > 0,
      };
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
        const [fdata, fortnoxDbCustomers] = await Promise.all([
          fetchFortnoxForCompany(companyId, "/customers"),
          companyClient.fortnoxCustomer.findMany({
            select: { customerNumber: true, customerId: true },
          }),
        ]);
        const dbMap = new Map(
          fortnoxDbCustomers.map((c) => [c.customerNumber, c.customerId]),
        );
        customers = (fdata?.Customers || []).map((c: any) => ({
          id: dbMap.get(String(c.CustomerNumber)) ?? null,
          customerNumber: c.CustomerNumber,
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
    invoiceRecipientAliases: async (_parent, _args, { user }) => {
      requireAdmin(user);
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({ where: { id: companyId } });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      const aliases = await client.invoiceRecipientAlias.findMany({
        include: { customer: true },
        orderBy: { createdAt: "desc" },
      });
      return aliases.map((a) => ({ ...a, createdAt: a.createdAt.toISOString() }));
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
    login: async (_parent, { email, password, companyDomain }, { res }) => {
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
      ).user.findUnique({
        where: { email },
      });
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
        { expiresIn: "8h" },
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 8 * 60 * 60 * 1000,
      });
      return {
        id: companyUser.id,
        email: companyUser.email,
        role: companyUser.role,
        companyId: companyUser.companyId,
      };
    },
    loginSuperAdmin: async (_parent, { userName, password }, { res }) => {
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
        { expiresIn: "8h" },
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 8 * 60 * 60 * 1000,
      });
      return { userName: masterUser.userName, role: masterUser.role };
    },
    logout: async (_parent, _args, { res }) => {
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      return "Logged out successfully";
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
            { extensions: { code: "FORBIDDEN" } },
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
    addImapCredentials: async (
      _parent,
      { companyDomain, userEmail, imapHost, imapPort, emailAddress, password },
      { user },
    ) => {
      requireAdmin(user);
      const company = await masterClient.company.findUnique({
        where: { domain: companyDomain },
      });
      if (!company)
        throw new GraphQLError(
          `Company not found for domain: ${companyDomain}`,
        );
      const result = await addImapCredentials(
        company.name,
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
    removeCompany: async (_parent, { companyId }, { user }) => {
      requireSuperAdmin(user);
      await removeCompany(companyId);
      return "Company removed successfully";
    },
    assignCustomerToEmployee: async (
      _parent,
      { customerId, userId },
      { user },
    ) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      requireAdmin(user);
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      const link = await client.employeeCustomer.create({
        data: {
          userId,
          customerId,
          assignedBy: (user as any).id,
        },
      });
      return { ...link, assignedAt: link.assignedAt.toISOString() };
    },
    syncFortnox: async (_parent, _args, { user }) => {
      if (!user) throw new GraphQLError("Unauthorized", { extensions: { code: "UNAUTHORIZED" } });
      requireAdmin(user);
      const companyId = (user as any).companyId;
      const result = await syncFortnoxData(companyId);
      return `Synced ${result.customers} customers and ${result.invoices} invoices`;
    },
    unassignCustomerFromEmployee: async (
      _parent,
      { customerId, userId },
      { user },
    ) => {
      if (!user)
        throw new GraphQLError("Unauthorized", {
          extensions: { code: "UNAUTHORIZED" },
        });
      requireAdmin(user);
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({
        where: { id: companyId },
      });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      await client.employeeCustomer.deleteMany({
        where: { userId, customerId },
      });
      return "Unassigned successfully";
    },
    createInvoiceRecipientAlias: async (_parent, { alias, customerId }, { user }) => {
      requireAdmin(user);
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({ where: { id: companyId } });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      const created = await client.invoiceRecipientAlias.create({
        data: { alias, customerId },
        include: { customer: true },
      });
      return { ...created, createdAt: created.createdAt.toISOString() };
    },
    deleteInvoiceRecipientAlias: async (_parent, { id }, { user }) => {
      requireAdmin(user);
      const companyId = (user as any).companyId;
      const company = await masterClient.company.findUnique({ where: { id: companyId } });
      if (!company) throw new GraphQLError("Company not found");
      const client = getCompanyClient(company.dbName);
      await client.invoiceRecipientAlias.delete({ where: { id } });
      return true;
    },
  },
};

export default resolvers;
