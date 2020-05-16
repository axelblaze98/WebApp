const AWS = require("aws-sdk");
const express = require("express");
const app = express();
const cors = require("cors");


AWS.config.loadFromPath("./config.json");

var documentClient = new AWS.DynamoDB.DocumentClient();

var corsOptionsDelegate = function(req, callback) {
  var corsOptions = {
    origin: true
  }; // reflect (enable) the requested origin in the CORS response
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.options("*", cors(corsOptionsDelegate));
app.get("/Twitter", function(res, req) {
  var params = {
    TableName: "twitter-sentiment-data"
  };

  documentClient.scan(params, onScan);

  function onScan(err, data) {
    if (err) {
      console.error("Unable to scan", JSON.stringify(err, null, 2));
    } else {
      req.send(data.Items);
    }
  }
});
app.get("/Currency", function(res, req) {
  var params = {
    TableName: "Fixer1"
  };

  documentClient.scan(params, onScan);

  function onScan(err, data) {
    if (err) {
      console.error("Unable to scan", JSON.stringify(err, null, 2));
    } else {
      req.send(data.Items);
    }
  }
});

app.get("/Synthetic", function (res, req) {
  var params = {
    TableName: "synt-data"
  };

  documentClient.scan(params, onScan);

  function onScan(err, data) {
    if (err) {
      console.error("Unable to scan", JSON.stringify(err, null, 2));
    } else {
      req.send(data.Items);
    }
  }
});
app.listen(3000, function() {
  console.log("Server is running");
});
