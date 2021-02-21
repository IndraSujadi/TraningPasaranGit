"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// creating Http Server
var http_1 = __importDefault(require("http"));
var server = http_1.default.createServer(); // ini untuk buat server object http nya
// untuuk respon panggilan, Parameter call backnya req(artinya request) res(artinya response)
server.on('request', function (req, res) {
    console.log('Request received', req.url);
    res.statusCode = 200; // ini kita mutate statusCodenya
    res.statusMessage = 'OK';
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Hello World</p>'); // write berarti kirimin data ke orang yang request
    res.write('\n');
    res.end(); // Kalau selesai ditutup pake res.end()
});
server.on('error', function (error) {
    console.log('Some error happened', error);
});
server.on('listening', function () {
    console.log('Server is ready to receive connection');
});
// try to listen port 8000
server.listen(8000);
//# sourceMappingURL=main.js.map