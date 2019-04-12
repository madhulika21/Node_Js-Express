const express = require('express'),
http = require('http');
const hostname = 'localhost';
const port = 3000;

const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));
app.use((req,res,next) => {
console.log(req.header);
res.statusCode=200;
res.setHeader('Content-Type','text/html');
res.end('<html><body><h1>madhulika richhariya</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port,hostname,()=> {
console.log(`this is running on server http://${hostname}:${port}`);
});

