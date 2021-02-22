// ini sepertinya cara paling aman untuk kirim data berukuran besar
import http from 'http';
import fs from 'fs';
import { join, extname } from 'path';
import { preProcessFile } from 'typescript';
import Router from './router';

let server = http.createServer();

let assetsDirectory = join(__dirname, '../assets'); // dilakukan agar user tidak bisa akses folder lain

type SupportedType = { [key: string]: string };
const supportedType: SupportedType = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  mp4: 'video.mp4',
  txt: 'text/plain',
  html: 'text/html',
  json: 'application/json',
};

function serveErrorPage(request: any, response: any, error: any) {
  console.error(error);
  response.statusCode = 500;
  response.statusMessage = 'Something Went Wrong';
  response.setHeader('Content-Type', 'text/plain');
  response.write('Internal Server Error');
  response.end();
}

function serveAssets(request: any, response: any, fileAddress: any) {
  let fileExtension = '';
  let filePath = '';
  if (typeof fileAddress == 'string') {
    fileExtension = extname(fileAddress).slice(1).toLowerCase();
    console.log(fileExtension);
    filePath = fileAddress;
    console.log(filePath);
  } else {
    let indexFileName = fileAddress.length - 1;
    // ambil array paling terakhir karena pasti yang akhir itu filenya misakan [files/dog/dog.jpg]
    let fileName = fileAddress[indexFileName];
    fileExtension = extname(fileName).slice(1).toLowerCase();

    // gabungkan tiap element array file address menjadi sebuah pth /element/...
    let dirPath = '';
    fileAddress.forEach((path: any) => {
      dirPath = join('/', path);
    });
    filePath = join(assetsDirectory, dirPath);
  }

  let contentType = supportedType[fileExtension];
  if (contentType == null) {
    serveNotFoundPage(request, response);
    return;
  }

  // let filePath = join(assetsDirectory, fileName);
  let readStream = fs.createReadStream(filePath); // readStream ini eventemitter juga

  readStream.on('error', error => {
    if (error.message.includes('ENOENT')) {
      serveNotFoundPage(request, response);
    } else {
      serveErrorPage(request, response, error);
    }
  });
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', contentType);
  readStream.pipe(response); // ini built in nya jadi gk perlu buat
}

function serveNotFoundPage(request: any, response: any) {
  response.statusCode = 404;
  response.statusMessage = 'Not Found';
  response.setHeader('Content-Type', 'text/html');
  response.write('<p>Not Found</p>');
  response.end();
}

function parseRequestBody(request: any, response: any) {
  return new Promise((resolve, reject) => {
    let contentType = request.headers['content-type'];
    if (contentType !== 'application/json') {
      reject(new Error('Invalid content-type'));
    }
    let dataChunks: Buffer[] = [];

    request.on('error', (error: any) => {
      reject(error);
    });

    request.on('data', (data: Buffer) => {
      dataChunks.push(data); // bisa juga ini langsung push data.toString()
    });

    request.on('end', () => {
      let body = Buffer.concat(dataChunks).toString();
      let data;
      try {
        data = JSON.parse(body);
      } catch (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  });
}

async function receiveJSON(request: any, response: any) {
  try {
    let data = await parseRequestBody(request, response);
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify({ success: true, dataReceived: data }));
    response.end();
  } catch (error) {
    response.statusCode = 400;
    response.setHeader('Content-Type', 'text/html');
    response.write(`<p>Erro Parsing Request Body : ${error.message} </p>`);
    response.end();
  }
}

type ObjectReqRes = {
  request: any;
  response: any;
};
let router = new Router();

router.addRoute('/', ({ request, response }: ObjectReqRes) => {
  let index = join(assetsDirectory, 'index.html');
  serveAssets(request, response, index);
});

router.addRoute('/files/:filename', ({ request, response }: ObjectReqRes, fileAddress) => {
  serveAssets(request, response, fileAddress);
});

server.on('request', (request, response) => {
  router.handleRequest(request.url, { request, response });
});

server.on('error', error => {
  console.log('Some error happened', error);
});

server.on('listening', () => {
  console.log('Server is ready to receive connection');
});

// try to listen port 8000
server.listen(8000);
