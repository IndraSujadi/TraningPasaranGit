"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ini sepertinya cara paling aman untuk kirim data berukuran besar
var http_1 = __importDefault(require("http"));
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var server = http_1.default.createServer();
function serveHomePage(request, response) {
    response.statusCode = 200;
    response.statusMessage = 'OK';
    response.setHeader('Content-Type', 'text/html');
    response.write('<p>Hello</p>');
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
function serveAssets(request, response, filePath) {
    var readStream = fs_1.default.createReadStream(filePath); // readStream ini eventemitter juga
    //   readStream.on('error', (error) => {}) akan dipanggil setiap kita mendapatkan error
    readStream.on('error', function (error) {
        serveErrorPage(request, response, error);
    });
    //   readStream.on('data', () => {}) akan dipanggil setiap kita mendapatkan potongan (chunk) data
    //   let sent = false;
    var chunkCount = 0;
    readStream.on('data', function (data) {
        if (chunkCount === 0) {
            response.statusCode = 200;
            response.statusMessage = 'OK';
            response.setHeader('Content-Type', 'video/mp4');
        }
        // sent = true;
        chunkCount += 1;
        console.log("Sending chunk " + chunkCount + " @ " + data.length + " bytes");
        var shouldContinue = response.write(data);
        if (shouldContinue === false) {
            console.log('Pausing....');
            readStream.pause();
            response.once('drain', function () {
                console.log('Drained');
                readStream.resume();
            });
        }
    });
    readStream.on('end', function () {
        response.end();
    });
}
function serveNotFoundPage(request, response) {
    response.statusCode = 404;
    response.statusMessage = 'Not Dound';
    response.setHeader('Content-Type', 'text/html');
    response.write('<p>Not Found</p>');
    response.end();
}
server.on('request', function (req, res) {
    switch (req.url) {
        case '/': {
            serveHomePage(req, res);
            break;
        }
        case '/files/indo.jpg': {
            var filePath = path_1.join(__dirname, '../assets/indo.jpg');
            serveAssets(req, res, filePath);
            break;
        }
        case '/files/video.mp4': {
            var filePath = path_1.join(__dirname, '../assets/video.mp4');
            serveAssets(req, res, filePath);
            break;
        }
        default: {
            serveNotFoundPage(req, res);
        }
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
//# sourceMappingURL=task.js.map