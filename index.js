const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require('./models/products.model.js')
const productRoutes = require('./routes/product.route.js')


// Middleware
// We are using middleware because nodejs cannot pass json data directly
app.use(express.json());
// Allows to add form data
app.use((express.urlencoded({extended:false})))

// Intialize routes
app.use('/api/products', productRoutes)

mongoose
  .connect(
    "mongodb+srv://balajibalu63204:<password>@backenddatabase.sxtur.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDatabase"
  )
  .then(() => {
    console.log("Database was Connected");
  })
  .catch((error) => {
    console.log("error while connecting to the Database", error);
  });

app.get("/", (req, res) => {
  res.send("Hello from the node api was chang");
});



app.listen(3000, () => {
  console.log(`server running at port 3000`);
});
