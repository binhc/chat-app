var http = require('http')
var express = require('express');
var app = express();

app.get('/', (req,res,next)=>{
    res.send("Hello, World!");
    
})

var server = http.createServer(app);
server.listen(8080);
console.log('The server is listening on port 8080'); 

