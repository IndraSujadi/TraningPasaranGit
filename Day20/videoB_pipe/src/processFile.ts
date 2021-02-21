// creating Http Server
import http from 'http';
import fs from 'fs';
import { join } from 'path';

let filePath = join(__dirname, '../assets/indo.jpg');
// file data tipenya buffer
fs.readFile(filePath, (error, fileData) => {
  let server = http.createServer(); // ini untuk buat server object http nya

  // untuk respon panggilan, Parameter call backnya req(artinya request) res(artinya response)
  server.on('request', (req, res) => {
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

  server.on('error', error => {
    console.log('Some error happened', error);
  });

  server.on('listening', () => {
    console.log('Server is ready to receive connection');
  });

  // try to listen port 8000
  server.listen(8000);
});
