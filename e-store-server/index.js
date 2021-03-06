const express = require("express");
const app = express();
const cors = require("cors");
const product = require("./Routes/product");


app.use(cors());
app.use("/", express.static("Uploads"));
app.use("/product/api/", product);

const PORT = 5000;
app.listen(PORT, ()=>{ 
    console.log("Listening on port: " + PORT);
})