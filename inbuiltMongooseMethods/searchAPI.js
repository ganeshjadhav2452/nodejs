const express = require('express')
require('./config')
const Products = require('./products')

const app = express()

app.use(express.json())

app.get('/search/:key',async(request,response)=>{
    
    let data = await Products.find({
        "$or":[
            {"name":{$regex:request.params.key}},
            {"brand":{$regex:request.params.key}}
        ]
    })
    console.log(data)
    response.send(data)
})

app.listen(4000)