const connectDB = require('../mongoDB')

const deleteDataFromMongoDB = async()=>{
    const connection = await connectDB();
        connection.deleteMany({price:1000})// we are saying in our collection objects with price 1000 should be removed 
}

deleteDataFromMongoDB()