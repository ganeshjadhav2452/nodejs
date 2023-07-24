// crating new file using command input

const apiData = require('./api.json')
const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify(apiData))
    res.end()
}).listen(3000,)