const http = require('http');

const hostname = 'localhost';
const port = 3000;


const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hola Mundo</h1>');
  res.end();

});

server.listen(port, () => {
  console.log(`Server running at http://${port}/`);
});

