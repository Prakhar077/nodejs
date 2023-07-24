var http = require('http'); // Importing the http package
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.writeHead(200, {'Content-Type': 'text/html'}); //uncomment to run h1,h2 below
  res.end('Hello Prakhar!');
 // res.end('<h1>prakhar</h1>  <h2>sharma</h2>');
}).listen(8080);