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
// ini sepertinya cara paling aman untuk kirim data berukuran besar
var http_1 = __importDefault(require("http"));
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var router_1 = __importDefault(require("./router"));
var server = http_1.default.createServer();
var assetsDirectory = path_1.join(__dirname, '../assets'); // dilakukan agar user tidak bisa akses folder lain
var supportedType = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    mp4: 'video.mp4',
    txt: 'text/plain',
    html: 'text/html',
    json: 'application/json',
};
function serveErrorPage(request, response, error) {
    console.error(error);
    response.statusCode = 500;
    response.statusMessage = 'Something Went Wrong';
    response.setHeader('Content-Type', 'text/plain');
    response.write('Internal Server Error');
    response.end();
}
function serveAssets(request, response, fileAddress) {
    var fileExtension = '';
    var filePath = '';
    if (typeof fileAddress == 'string') {
        fileExtension = path_1.extname(fileAddress).slice(1).toLowerCase();
        console.log(fileExtension);
        filePath = fileAddress;
        console.log(filePath);
    }
    else {
        var indexFileName = fileAddress.length - 1;
        // ambil array paling terakhir karena pasti yang akhir itu filenya misakan [files/dog/dog.jpg]
        var fileName = fileAddress[indexFileName];
        fileExtension = path_1.extname(fileName).slice(1).toLowerCase();
        // gabungkan tiap element array file address menjadi sebuah pth /element/...
        var dirPath_1 = '';
        fileAddress.forEach(function (path) {
            dirPath_1 = path_1.join('/', path);
        });
        filePath = path_1.join(assetsDirectory, dirPath_1);
    }
    var contentType = supportedType[fileExtension];
    if (contentType == null) {
        serveNotFoundPage(request, response);
        return;
    }
    // let filePath = join(assetsDirectory, fileName);
    var readStream = fs_1.default.createReadStream(filePath); // readStream ini eventemitter juga
    readStream.on('error', function (error) {
        if (error.message.includes('ENOENT')) {
            serveNotFoundPage(request, response);
        }
        else {
            serveErrorPage(request, response, error);
        }
    });
    response.statusCode = 200;
    response.statusMessage = 'OK';
    response.setHeader('Content-Type', contentType);
    readStream.pipe(response); // ini built in nya jadi gk perlu buat
}
function serveNotFoundPage(request, response) {
    response.statusCode = 404;
    response.statusMessage = 'Not Found';
    response.setHeader('Content-Type', 'text/html');
    response.write('<p>Not Found</p>');
    response.end();
}
function parseRequestBody(request, response) {
    return new Promise(function (resolve, reject) {
        var contentType = request.headers['content-type'];
        if (contentType !== 'application/json') {
            reject(new Error('Invalid content-type'));
        }
        var dataChunks = [];
        request.on('error', function (error) {
            reject(error);
        });
        request.on('data', function (data) {
            dataChunks.push(data); // bisa juga ini langsung push data.toString()
        });
        request.on('end', function () {
            var body = Buffer.concat(dataChunks).toString();
            var data;
            try {
                data = JSON.parse(body);
            }
            catch (error) {
                reject(error);
                return;
            }
            resolve(data);
        });
    });
}
function receiveJSON(request, response) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, parseRequestBody(request, response)];
                case 1:
                    data = _a.sent();
                    response.setHeader('Content-Type', 'application/json');
                    response.write(JSON.stringify({ success: true, dataReceived: data }));
                    response.end();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    response.statusCode = 400;
                    response.setHeader('Content-Type', 'text/html');
                    response.write("<p>Erro Parsing Request Body : " + error_1.message + " </p>");
                    response.end();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var router = new router_1.default();
router.addRoute('/', function (_a) {
    var request = _a.request, response = _a.response;
    var index = path_1.join(assetsDirectory, 'index.html');
    serveAssets(request, response, index);
});
router.addRoute('/files/:filename', function (_a, fileAddress) {
    var request = _a.request, response = _a.response;
    serveAssets(request, response, fileAddress);
});
server.on('request', function (request, response) {
    router.handleRequest(request.url, { request: request, response: response });
});
server.on('error', function (error) {
    console.log('Some error happened', error);
});
server.on('listening', function () {
    console.log('Server is ready to receive connection');
});
// try to listen port 8000
server.listen(8000);
//# sourceMappingURL=day23.js.map