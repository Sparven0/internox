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
var express_1 = __importDefault(require("express"));
var axios_1 = __importDefault(require("axios"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var crypto_1 = __importDefault(require("crypto"));
var router = express_1.default.Router();
// Middleware to parse cookies
router.use((0, cookie_parser_1.default)());
router.get('/auth', function (req, res) {
    var state = crypto_1.default.randomBytes(16).toString('hex');
    res.cookie('oauthState', state, { httpOnly: true, secure: true, sameSite: 'strict' });
    res.redirect("https://apps.fortnox.se/oauth-v1/auth?state=".concat(state, "&redirect_uri=http://localhost:1222/fortnox-callback"));
});
router.get('/callback', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, state, code, cookieState, tokenRes, _b, access_token, refresh_token, expires_in, expires_at, err_1;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = req.query, state = _a.state, code = _a.code;
                cookieState = req.cookies.oauthState;
                if (!state || state !== cookieState) {
                    return [2 /*return*/, res.status(400).send('Invalid state')];
                }
                res.clearCookie('oauthState');
                if (!code) {
                    return [2 /*return*/, res.status(400).send('Missing authorization code')];
                }
                _d.label = 1;
            case 1:
                _d.trys.push([1, 4, , 5]);
                return [4 /*yield*/, axios_1.default.post('https://apps.fortnox.se/oauth-v1/token', new URLSearchParams({
                        grant_type: 'authorization_code',
                        code: code,
                        redirect_uri: 'http://localhost:1222/fortnox-callback',
                    }), {
                        headers: {
                            Authorization: "Basic ".concat(Buffer.from("".concat(process.env.FORTNOX_CLIENT_ID, ":").concat(process.env.FORTNOX_CLIENT_SECRET)).toString('base64')),
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    })];
            case 2:
                tokenRes = _d.sent();
                _b = tokenRes.data, access_token = _b.access_token, refresh_token = _b.refresh_token, expires_in = _b.expires_in;
                expires_at = new Date(Date.now() + expires_in * 1000);
                return [4 /*yield*/, axios_1.default.post('http://localhost:1222/new-credentials', {
                        service: 'Fortnox',
                        tokens: {
                            access_token: access_token,
                            refresh_token: refresh_token,
                            expires_at: expires_at,
                        },
                        customerId: 12345,
                    })];
            case 3:
                _d.sent();
                res.send('Fortnox successfully connected.');
                return [3 /*break*/, 5];
            case 4:
                err_1 = _d.sent();
                console.error(((_c = err_1.response) === null || _c === void 0 ? void 0 : _c.data) || err_1.message || err_1);
                res.status(500).send('OAuth failed');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
