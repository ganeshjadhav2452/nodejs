// read data from mongodb

const connectDB = require('../mongoDB')

const findData = async()=>{

    let connection = await connectDB()
    connection = await connection.find({}).toArray();
   console.log(connection)
}
findData()
