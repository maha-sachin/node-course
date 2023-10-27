import http from "http";


// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(202,'Good' ,{ 'Content-Type': 'text/html' });
    res.write("<h1>hello this is node.js server</h1>")
    
    
  });

  server.listen(8000,()=>console.log("server is up"))