// insert Data in the mongo  DB

const connectDB = require('../mongoDB')


const insertData = async()=>{
    const database =await connectDB();

    const result = database.insertMany([
        {name:'iphone XR',brand:'Apple',price:4000},
        {name:'iphone X',brand:'Apple',price:9353},
        {name:'iphone 14',brand:'Apple',price:4293400},
        {name:'iphone 13',brand:'Apple',price:408400},
    ])

        

}
insertData()
