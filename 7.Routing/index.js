import http, { createServer } from 'http'

const server = http.createServer((req,res)=>{
    //Routing
    if(req.url === '/'){
        res.end("<h1>home</h1>")
    }

})

server.listen(8000,()=>console.log("server use router is up"))