const http = require('http');
const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req,res)=>
{
    res.setCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello Docker');
   
});

server.listen(port,hostname,()=>
{
    console.log(`Server running at http://${hostname}:${port}/`);
});