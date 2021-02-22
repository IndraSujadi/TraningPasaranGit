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
function serveAssets(request, response, filePath) {
    var fileExtension = path_1.extname(filePath).slice(1).toLowerCase();
    var contentType = supportedType[fileExtension];
    if (contentType == null) {
        serveNotFoundPage(request, response);
        return;
    }
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
// ini task nya untuk terima kiriman data json dari client (yang lama)
// async function parseRequestBody(request: any, response: any) {
//   let receivedData: string[] = [];
//   await request.on('data', (data: Buffer) => {
//     receivedData.push(data.toString());
//   });
//   let jsonData = receivedData.join('');
//   let obj = JSON.parse(jsonData);
//   console.log(typeof obj);
//   console.log(obj.product_name);
//   request.on('end', () => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'application/json');
//     response.write(JSON.stringify({ success: true }));
//     response.end();
//   });
// }
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
server.on('request', function (req, res) {
    if (req.url.startsWith('/files/')) {
        var fileName = req.url.slice(7);
        var filePath = path_1.join(assetsDirectory, fileName);
        if (!filePath.startsWith(assetsDirectory + '\\')) {
            serveNotFoundPage(req, res);
            return;
        }
        serveAssets(req, res, filePath);
        return;
    }
    switch (req.url) {
        case '/': {
            var filePath = path_1.join(assetsDirectory, 'index.html');
            serveAssets(req, res, filePath);
            break;
        }
        // ini task nya untuk terima kiriman data json dari client
        case '/submit-json': {
            if (req.method === 'POST') {
                parseRequestBody(req, res)
                    .then(function (data) {
                    res.setHeader('Content-Type', 'application/json');
                    res.write(JSON.stringify({ success: true, dataReceived: data }));
                    res.end();
                })
                    .catch(function (error) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'text/html');
                    res.write("<p>Erro Parsing Request Body : " + error.message + " </p>");
                    res.end();
                });
            }
            else {
                res.statusCode = 405;
                res.setHeader('Content-Type', 'text/html');
                res.write('<p>Method not allowed</p>');
                res.end();
            }
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
//# sourceMappingURL=day22.js.map