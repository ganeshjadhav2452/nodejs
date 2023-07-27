const mongoose = require("mongoose");


 mongoose.connect("mongodb://0.0.0.0:27017/ganesh-jadhav");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
});

const ProductsModel = mongoose.model("products", ProductSchema);

//create data in db

const postData = async () => {
 

  let data = new ProductsModel({ name: "i 11", price: 200, brand: "itel" });
  let result = await data.save();
  console.log(result);
};

// postData();

// update in db

const updateInDb =async()=>{

         let data = await ProductsModel.updateMany({name:'i 11'},{
            $set:{price:0}
        })


        console.log(data)
    
}

// updateInDb()



// update in db

const deleteFromDb = async()=>{

    let data = await ProductsModel.deleteMany({name:'i 11'})
    console.log(data)
}

// deleteFromDb()


// fiding in database


const readDb = async()=>{
    let data = await ProductsModel.find()
    console.log(data)
}

//readDb()

// reading Data from dataBase

const findData = async()=>{
    let data = await ProductsModel.find({name:'i 10'})
    console.log(data)

    // if someone ask in interview about difference between find & reading then we can tell them if we dont pass any condition in the find method then it will give us whole collections data  and its called reading data , and if we pass any specific condition in it then we are finding specific data in it like this one
}

findData()