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

// post data on server
app.post('/',async(request,response)=>{
    let data =await connectDB();
    data = await data.insertOne(request.body)
    response.send(request.body)

})

app.put('/',async(request,response)=>{
    // let data = await connectDB()
    // // data = await data.updateOne(request.body);
    // response.send(request.body)

    // not understood
   
})

app.delete('/',async(request, response)=>{
    
    let data = await connectDB();
        data = await data.deleteMany(request.body)
    console.log(request.body)
    response.send(' deleted')
})



app.listen(4000)
