const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./Routes/route.js")

var corsOptionsDelegate = (req, callback) => {
  var corsOptions = {
    origin: true
  };
  callback(null, corsOptions); 
};

app.options("*", cors(corsOptionsDelegate));
app.use(route)

app.listen(3000, function () {
  console.log("Server is running");
});
