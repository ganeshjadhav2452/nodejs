const mongoose = require('mongoose')
const main = async ()=>{
    await mongoose.connect('mongodb://0.0.0.0:27017/ganesh-jadhav')
    
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    })
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = new ProductsModel({name:'i 10',  price:1000});
    let result = await data.save()
    console.log(result)
}

main()