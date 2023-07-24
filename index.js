
const http = require('http')

http.createServer((req,res)=>{
    res.write('<h1>hi this is ganesh </h1>')
    res.end()
}).listen(3000,)