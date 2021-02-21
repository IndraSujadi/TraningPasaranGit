"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// creating Http Server
var http_1 = __importDefault(require("http"));
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var filePath = path_1.join(__dirname, '../assets/indo.jpg');
// file data tipenya buffer
fs_1.default.readFile(filePath, function (error, fileData) {
    var server = http_1.default.createServer(); // ini untuk buat server object http nya
    // untuk respon panggilan, Parameter call backnya req(artinya request) res(artinya response)
    server.on('request', function (req, res) {
        if (req.url === '/files/indo.jpg') {
            res.statusCode = 200;
            res.statusMessage = 'OK';
            res.setHeader('Content-Type', 'image/jpeg');
            res.write(fileData);
            res.end();
        }
        else {
            res.statusCode = 404;
            res.statusMessage = 'Not Dound';
            res.setHeader('Content-Type', 'text/html');
            res.write('<p>Not Found</p>');
            res.end();
        }
    });
    server.on('error', function (error) {
        console.log('Some error happened', error);
    });
    server.on('listening', function () {
        console.log('Server is ready to receive connection');
    });
    // try to listen port 8000
    server.listen(8000);
});
//# sourceMappingURL=processFile.js.map