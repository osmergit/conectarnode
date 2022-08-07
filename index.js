
const http = require('http');

const hostname = 'ip-172-31-81-240.ec2.internal';
const port = 80;
const iniciarservidor =  function (req,res)
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hola Mundo</h1>');
    res.end();

}

const server = http.createServer(iniciarservidor);

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

