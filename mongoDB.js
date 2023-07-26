const {MongoClient} = require('mongodb')
const dataBase = 'ganesh-jadhav'
const url = 'mongodb://0.0.0.0:27017'

const client = new MongoClient(url);

async function connectDB(){
    let result = await client.connect();
   const myDataBase =  result.db(dataBase)
   return   myDataBase.collection('products')
   

}

module.exports = connectDB;