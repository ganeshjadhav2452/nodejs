const connectDb = require('../mongoDB')

const update = async()=>{
    const connection =await connectDb();
    connection.updateOne(
        {name:'iphone XR'},{
            $set:{price:0}
        }
       
    )
    
}

update()