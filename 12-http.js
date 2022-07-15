const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/about'){
        res.end('welcome to about')
    }
    if(req.url === '/'){
        res.end('Welcome to Home')
    }
    
       

    res.end(`<h1> Oops!</h1>`)

  
});

server.listen(5000)