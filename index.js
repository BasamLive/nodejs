const http = require('http')

const fs = require('fs')

const port = 3000;


const app = http.createServer((req,res)=>{
	res.end("Hello world");

}).listen(port,()=> console.log('server is running on port 3000....'))
