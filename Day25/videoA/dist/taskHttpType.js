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
var http_1 = __importDefault(require("http"));
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var server = http_1.default.createServer();
server.on('error', function (error) {
    console.log("Some Error Happened : " + error);
});
server.on('request', function (request, response) {
    switch (request.url) {
        case '/': {
            serveHomePage(request, response);
            break;
        }
        case '/submit': {
            if (request.method === 'POST') {
                // getData(request, response);
                parseRequestBody(request, response);
            }
            else {
                response.statusCode = 405;
                response.setHeader('Content-Type', 'text/html');
                response.write('<p>Method not Allowed</p>');
                response.end();
            }
        }
    }
});
function serveHomePage(request, response) {
    var filePath = path_1.join(__dirname, '../assets', 'index.html');
    var readStream = fs_1.default.createReadStream(filePath);
    readStream.on('error', function (error) {
        if (error.message.includes('ENOENT')) {
            serveNotFoundPage(request, response);
        }
        else {
            serveErrorPage(request, response, error);
        }
    });
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    readStream.pipe(response);
}
function parseRequestBody(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var receivedData, jsonData, data, print, number;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (request.headers['content-type'] !== 'application/json') {
                        response.statusCode = 405;
                        response.statusMessage = 'Bad Request';
                        response.setHeader('Content-Type', 'text/html');
                        response.write('<p>Invalid Content type</p>');
                        response.end();
                    }
                    request.on('error', function (error) {
                        serveErrorPage(request, response, error);
                    });
                    receivedData = [];
                    return [4 /*yield*/, request.on('data', function (data) {
                            receivedData.push(data.toString());
                        })];
                case 1:
                    _a.sent();
                    jsonData = receivedData.join('');
                    data = JSON.parse(jsonData);
                    print = true;
                    if (typeof data == 'object') {
                        if (Object.keys(data).length == 2 && data.productName && data.productPrice) {
                            number = /^[0-9]+$/;
                            if (!data.productPrice.match(number)) {
                                print = false;
                            }
                        }
                        else {
                            print = false;
                        }
                    }
                    else {
                        print = false;
                    }
                    if (print) {
                        console.log("product: " + data.productName);
                        console.log("price: " + data.productPrice);
                    }
                    else {
                        response.statusCode = 400;
                        response.setHeader('Content-Type', 'text/html');
                        response.write('<p>Bad Request</p>');
                        response.end();
                    }
                    request.on('end', function () {
                        response.statusCode = 200;
                        response.setHeader('Content-Type', 'application/json');
                        response.write(JSON.stringify({ success: true }));
                        response.end();
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function serveNotFoundPage(request, response) {
    response.statusCode = 404;
    response.statusMessage = 'Not Found';
    response.setHeader('Content-Type', 'text/html');
    response.write('<p>Not Found</p>');
    response.end();
}
function serveErrorPage(request, response, error) {
    console.error(error);
    response.statusCode = 500;
    response.statusMessage = 'Something Went Wrong';
    response.setHeader('Content-Type', 'text/plain');
    response.write('Internal Server Error');
    response.end();
}
server.listen(8000, function () {
    console.log('Server is Ready ...');
});
//# sourceMappingURL=taskHttpType.js.map