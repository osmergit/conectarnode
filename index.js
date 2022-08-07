require('./funciones.js')
const http = require('http');

//const hostname = '44.210.24.228';
const port = 3000;
const iniciarservidor =  function (req,res)
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hola Mundo</h1>');
    res.end();

}

const server = http.createServer(iniciarservidor);

server.listen(port, () => {
  console.log(`Server running at http://${port}/`);
});

