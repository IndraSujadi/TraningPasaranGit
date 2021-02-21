// ini dilakukan agar read file dan createServer dilakukan secara paralel
import http from 'http';
import fs from 'fs';
import { join } from 'path';

let filePath = join(__dirname, '../assets/indo.jpg');
// file data tipenya buffer
let fileDataPromise = new Promise((resolve, reject) => {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      reject(error);
    } else {
      resolve(data);
    }
  });
});

let serverPromise = new Promise((resolve, reject) => {
  let server = http.createServer();

  server.on('error', error => {
    reject(error);
  });

  server.on('listening', () => {
    resolve(server);
  });
  server.listen(8000);
});

async function serverResponse() {
  let server: any = await serverPromise;
  let fileData: any = await fileDataPromise;
  server.on('request', (req: any, res: any) => {
    if (req.url === '/files/indo.jpg') {
      res.statusCode = 200;
      res.statusMessage = 'OK';
      res.setHeader('Content-Type', 'image/jpeg');
      res.write(fileData);
      res.end();
    } else {
      res.statusCode = 404;
      res.statusMessage = 'Not Dound';
      res.setHeader('Content-Type', 'text/html');
      res.write('<p>Not Found</p>');
      res.end();
    }
  });
}
serverResponse();
