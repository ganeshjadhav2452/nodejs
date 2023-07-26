const connectDB = require('./mongoDB')
const express = require('express')

const app = express();
 app.use(express.json())
// sending data of mongoDB of on browser
app.get('/',async(request,response)=>{
    let connection = await connectDB();
    const data = await connection.find({}).toArray()
    console.log(data)

    response.send(data)


})

app.post('/',async(request,response)=>{
    let data =await connectDB();
    data = await data.insertOne(request.body)
    response.send(request.body)

})



app.listen(4000)
