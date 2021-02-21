"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var server = http_1.default.createServer();
server.on('error', function (error) {
    console.log('Some Error Happened', error);
});
server.on('request', function (request, response) {
    if (request.url == '/') {
        response.statusCode = 200;
        response.statusMessage = 'OK';
        response.setHeader('Content-Type', 'text/html');
        response.write('<p>Hello Strangers</p>');
        response.end();
    }
    else if (request.url == '/api/products') {
        var filePath = path_1.join(__dirname, '../assets/product.json');
        var data = fs_1.default.readFileSync(filePath);
        response.statusCode = 200;
        response.statusMessage = 'OK';
        response.setHeader('Content-Type', 'application/json');
        response.write(data);
        // response.write('<p>Products</p>');
        response.end();
    }
    else {
        response.statusCode = 404;
        response.statusMessage = 'Request Not Found';
        response.end();
    }
});
server.listen(8000, function () {
    console.log('Ready to Receive Connection');
});
//# sourceMappingURL=taskHttpServer.js.map