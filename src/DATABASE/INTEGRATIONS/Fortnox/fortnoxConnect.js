"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectFortnox = connectFortnox;
exports.getFortnoxData = getFortnoxData;
var axios_1 = __importDefault(require("axios"));
var dotenv_1 = __importDefault(require("dotenv"));
var fortnoxHub_1 = require("./fortnoxHub");
dotenv_1.default.config();
// GETS TOKENS 
function getTokens() {
    return __awaiter(this, void 0, void 0, function () {
        var tokens, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, fortnoxHub_1.getFortnoxTokens)()];
                case 1:
                    tokens = _a.sent();
                    tokens.forEach(function (token) {
                        var accessToken = token.accessToken;
                        console.log('Access Token:', accessToken);
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error fetching Fortnox tokens:', error_1);
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
//  
var FORTNOX_TOKEN_URL = 'https://apps.fortnox.se/oauth-v1/token';
var FORTNOX_API_BASE = 'https://api.fortnox.se/3';
function connectFortnox(accessToken, refreshToken, endpoint // example: "/customers"
) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2, newTokens, retryResponse;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 6]);
                    return [4 /*yield*/, axios_1.default.get("".concat(FORTNOX_API_BASE).concat(endpoint), {
                            headers: {
                                'Authorization': "Bearer ".concat(accessToken),
                                'Accept': 'application/json',
                                'Client-Secret': process.env.FORTNOX_CLIENT_SECRET || '',
                                'Access-Token': accessToken // Fortnox sometimes requires this as well
                            }
                        })];
                case 1:
                    response = _c.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_2 = _c.sent();
                    if (!(((_a = error_2.response) === null || _a === void 0 ? void 0 : _a.status) === 401)) return [3 /*break*/, 5];
                    console.log('Access token expired, refreshing...');
                    return [4 /*yield*/, refreshFortnoxToken(refreshToken)];
                case 3:
                    newTokens = _c.sent();
                    return [4 /*yield*/, axios_1.default.get("".concat(FORTNOX_API_BASE).concat(endpoint), {
                            headers: {
                                'Authorization': "Bearer ".concat(newTokens.access_token),
                                'Accept': 'application/json',
                                'Client-Secret': process.env.FORTNOX_CLIENT_SECRET || '',
                                'Access-Token': newTokens.access_token
                            }
                        })];
                case 4:
                    retryResponse = _c.sent();
                    return [2 /*return*/, retryResponse.data];
                case 5:
                    console.error('Failed Fortnox API call:', ((_b = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _b === void 0 ? void 0 : _b.data) || error_2.message);
                    throw error_2;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function refreshFortnoxToken(refreshToken) {
    return __awaiter(this, void 0, void 0, function () {
        var credentials, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    credentials = Buffer.from("".concat(process.env.FORTNOX_CLIENT_ID, ":").concat(process.env.FORTNOX_CLIENT_SECRET)).toString('base64');
                    return [4 /*yield*/, axios_1.default.post(FORTNOX_TOKEN_URL, new URLSearchParams({
                            grant_type: 'refresh_token',
                            refresh_token: refreshToken,
                        }), {
                            headers: {
                                Authorization: "Basic ".concat(credentials),
                                'Content-Type': 'application/x-www-form-urlencoded',
                            },
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, {
                            access_token: response.data.access_token,
                            refresh_token: response.data.refresh_token,
                        }];
            }
        });
    });
}
function getFortnoxData() {
    return __awaiter(this, void 0, void 0, function () {
        var tokens, accessToken, refreshToken, endpoint, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, (0, fortnoxHub_1.getFortnoxTokens)()];
                case 1:
                    tokens = _a.sent();
                    accessToken = tokens[0].access_token;
                    refreshToken = tokens[0].refresh_token || '';
                    endpoint = '/customers';
                    return [4 /*yield*/, connectFortnox(accessToken, refreshToken, endpoint)];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_3 = _a.sent();
                    console.error('Error fetching Fortnox data:', error_3);
                    throw error_3;
                case 4: return [2 /*return*/];
            }
        });
    });
}
// example usage:
// const data = await connectFortnox(
//   'your_access_token_here',
//   'your_refresh_token_here',
//   '/customers'
// );
// console.log('Fortnox data:', data);
