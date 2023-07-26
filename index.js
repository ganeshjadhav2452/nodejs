const express = require('express')
const connectDB = require('./mongoDB')
const app = express()






const findData = async()=>{

    let connection = await connectDB()
    connection = await connection.find({}).toArray();
   console.log(connection)
}
findData()

app.listen(3000)