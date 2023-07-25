const express = require('express')
const app = express()
const path = require('path')

const folderPath = path.join(__dirname,'/public')
console.log(folderPath)

app.use(express.static(folderPath))
// app.get('/',(req,res)=>{
//     res.send('hello, this is home page')


// })

// app.get('/about',(req,res)=>{
//     res.send('we are the best ')
// })

app.listen(3000)