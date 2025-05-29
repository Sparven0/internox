"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var onboardingRoute_1 = __importDefault(require("./routes/onboardingRoute"));
var newUserRoute_1 = __importDefault(require("./routes/newUserRoute"));
var extractUsersRoute_1 = __importDefault(require("./routes/extractUsersRoute"));
// import companyRouter from './routes/newCompanyRoute';
var CompanyRoute_1 = __importDefault(require("./routes/CompanyRoute"));
var newCredentialsRoute_1 = __importDefault(require("./routes/newCredentialsRoute"));
var newImapCredentialsRoute_1 = __importDefault(require("./routes/newImapCredentialsRoute"));
var createAdminRoute_1 = __importDefault(require("./routes/createAdminRoute"));
var loginRoute_1 = __importDefault(require("./routes/loginRoute"));
var createCompanyAdminRoute_1 = __importDefault(require("./routes/createCompanyAdminRoute"));
var fortnoxCallbackRoute_1 = __importDefault(require("./routes/fortnoxCallbackRoute"));
dotenv_1.default.config();
var sslOptions = {
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, 'key.pem')),
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, 'cert.pem')),
};
var server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use('/new-user', newUserRoute_1.default);
server.use('/users', extractUsersRoute_1.default);
// server.use('/new-company', companyRouter);
server.use('/company', CompanyRoute_1.default);
server.use('/onboarding', onboardingRoute_1.default);
server.use('/new-credentials', newCredentialsRoute_1.default);
server.use('/new-imap-credentials', newImapCredentialsRoute_1.default);
server.use('/login', loginRoute_1.default);
server.use('/create-admin', createAdminRoute_1.default);
server.use('/create-company-admin', createCompanyAdminRoute_1.default);
server.use('/fortnox', fortnoxCallbackRoute_1.default);
server.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port ".concat(process.env.PORT || 3000));
});
// https.createServer(sslOptions, server).listen(process.env.PORT || 3000, () => {
//     console.log(`Server is running on port ${process.env.PORT || 3000}`);
// })
// http.createServer((req, res) => {
//     res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
//     res.end();
//   }).listen(80, () => {
//     console.log('HTTP Server is redirecting to HTTPS');
//   });
