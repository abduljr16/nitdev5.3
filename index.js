const express = require("express");

const router = require("./routes/product.js");

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(3000, () => {
  console.log("Running on 3000");
});
