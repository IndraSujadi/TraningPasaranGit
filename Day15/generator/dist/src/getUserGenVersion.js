"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var node_fetch_1 = __importDefault(require("node-fetch"));
// Generator tidak kenal promise
function getUserRepos(userId) {
    var repos, ex_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, { type: "WAIT", ms: 200 }];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, {
                        type: "FETCH",
                        url: "https://api.github.com/users/" + userId + "/repos",
                    }];
            case 3:
                repos = _a.sent();
                console.log("Success");
                return [3 /*break*/, 5];
            case 4:
                ex_1 = _a.sent();
                console.log("Some Error Happened", ex_1);
                return [3 /*break*/, 5];
            case 5: return [4 /*yield*/, { type: "WAIT", ms: 300 }];
            case 6:
                _a.sent();
                return [2 /*return*/, repos.map(function (repo) { return repo.name; })];
        }
    });
}
function run(generator) {
    return new Promise(function (resolve) {
        function doNext(data) {
            var _a = generator.next(data), done = _a.done, value = _a.value;
            // console.log(done);
            // console.log(value);
            if (value && done == false) {
                if (value.type == "WAIT") {
                    setTimeout(function () {
                        doNext(undefined);
                    }, value.ms);
                }
                else if (value.type == "FETCH") {
                    node_fetch_1.default(value.url)
                        .then(function (response) { return response.json(); })
                        .then(function (data) {
                        doNext(data);
                    })
                        .catch(function (error) {
                        // untuk kirim errornya ke generator
                        generator.throw(error);
                    });
                }
            }
            else {
                resolve(value);
            }
        }
        doNext(undefined);
    });
}
// run(getUserRepos("IndraSujadi"));
var promise = run(getUserRepos("IndraSujadi"));
promise.then(function (result) {
    console.log(result);
});
//# sourceMappingURL=getUserGenVersion.js.map