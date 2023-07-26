const express = require('express')
const app = express()

const {MongoClient} = require('mongodb')
const dataBase = 'ganesh-jadhav'
const url = 'mongodb://0.0.0.0:27017'

const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
   const myDataBase =  result.db(dataBase)
   const collection =  myDataBase.collection('products')
    const data = await collection.find({}).toArray()
   console.log(data)

}

getData()

app.listen(3000)