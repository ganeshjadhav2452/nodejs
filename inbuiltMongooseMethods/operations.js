const express = require("express");
require("./config");
const Products = require("./products");

const app = express();

app.use(express.json());

app.post("/create", async (request, response) => {
  let data = new Products(request.body);
  let result = await data.save();
  console.log(request.body);
  response.send("done");
});

app.get("/allData", async (request, response) => {
  const data = await Products.find();
  response.send(data);
});

app.delete("/delete/:_id", async (request, response) => {
  console.log(request.params);

  const data = await Products.deleteOne(request.params);
  response.send(data);
});

app.put("/update/:_id/:price", async (request, response) => {
  const data = await Products.updateOne(
    { _id: request.params._id },
    {
      $set: { price: request.params.price, name: "iphone 12" },
    }
  );
  response.send(data);
});

app.listen(3000);
