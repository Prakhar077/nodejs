const net = require('net');
const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', (err, data) => {
      res.end(data.toString());
    })
    req.on('data', (data) => {
        console.log(data.toString());
    })
    req.on('close', ()=> {console.log('Closed');})
    req.on('resume', () => {
        console.log('Resumed');
    })
    // res.end('<h1>Hello Aaryan</h1><h2>Hello Aaryan</h2>');
  }).listen(8080);