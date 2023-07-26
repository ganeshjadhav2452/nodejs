const connectDB = require('./mongoDB')
const express = require('express')
const app = express();


app.get('/',async(request,response)=>{
    let connection = await connectDB();
    const data = await connection.find({}).toArray()
    console.log(data)

    response.send(data)


})



app.listen(3000)
