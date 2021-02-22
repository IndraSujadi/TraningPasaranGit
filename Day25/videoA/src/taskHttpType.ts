import http from 'http';
import fs from 'fs';
import { join } from 'path';

let server = http.createServer();

server.on('error', error => {
  console.log(`Some Error Happened : ${error}`);
});

server.on('request', (request, response) => {
  switch (request.url) {
    case '/': {
      serveHomePage(request, response);
      break;
    }
    case '/submit': {
      if (request.method === 'POST') {
        checkAndPrintData(request, response);
      } else {
        response.statusCode = 405;
        response.setHeader('Content-Type', 'text/html');
        response.write('<p>Method not Allowed</p>');
        response.end();
      }
    }
  }
});

function serveHomePage(request: any, response: any) {
  const filePath = join(__dirname, '../assets', 'index.html');
  let readStream = fs.createReadStream(filePath);

  readStream.on('error', error => {
    if (error.message.includes('ENOENT')) {
      serveNotFoundPage(request, response);
    } else {
      serveErrorPage(request, response, error);
    }
  });

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  readStream.pipe(response);
}
async function checkAndPrintData(request: any, response: any) {
  if (request.headers['content-type'] !== 'application/json') {
    response.statusCode = 405;
    response.statusMessage = 'Bad Request';
    response.setHeader('Content-Type', 'text/html');
    response.write('<p>Invalid Content type</p>');
    response.end();
  }

  request.on('error', (error: any) => {
    serveErrorPage(request, response, error);
  });

  let receivedData: string[] = [];
  await request.on('data', (data: Buffer) => {
    receivedData.push(data.toString());
  });
  let jsonData = receivedData.join('');
  let data = JSON.parse(jsonData);
  let print = true;
  if (typeof data == 'object') {
    if (Object.keys(data).length == 2 && data.productName && data.productPrice) {
      let number = /^[0-9]+$/;
      if (!data.productPrice.match(number)) {
        print = false;
      }
    } else {
      print = false;
    }
  } else {
    print = false;
  }

  if (print) {
    console.log(`product: ${data.productName}`);
    console.log(`price: ${data.productPrice}`);
  } else {
    response.statusCode = 400;
    response.setHeader('Content-Type', 'text/html');
    response.write('<p>Bad Request</p>');
    response.end();
  }

  request.on('end', () => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify({ success: true }));
    response.end();
  });
}

function checkData(data: object) {}

function serveNotFoundPage(request: any, response: any) {
  response.statusCode = 404;
  response.statusMessage = 'Not Found';
  response.setHeader('Content-Type', 'text/html');
  response.write('<p>Not Found</p>');
  response.end();
}

function serveErrorPage(request: any, response: any, error: any) {
  console.error(error);
  response.statusCode = 500;
  response.statusMessage = 'Something Went Wrong';
  response.setHeader('Content-Type', 'text/plain');
  response.write('Internal Server Error');
  response.end();
}

server.listen(8000, () => {
  console.log('Server is Ready ...');
});
