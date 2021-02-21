// creating Http Server
import http from 'http';

let server = http.createServer(); // ini untuk buat server object http nya

// untuuk respon panggilan, Parameter call backnya req(artinya request) res(artinya response)
server.on('request', (req, res) => {
  console.log('Request received', req.url);
  res.statusCode = 200; // ini kita mutate statusCodenya
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'text/html');
  res.write('<p>Hello World</p>'); // write berarti kirimin data ke orang yang request
  res.write('\n');
  res.end(); // Kalau selesai ditutup pake res.end()
});

server.on('error', error => {
  console.log('Some error happened', error);
});

server.on('listening', () => {
  console.log('Server is ready to receive connection');
});

// try to listen port 8000
server.listen(8000);
