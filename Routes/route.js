const AWS = require("aws-sdk");
var express = require("express");
var route = express.Router();

AWS.config.loadFromPath("./config.json");
var documentClient = new AWS.DynamoDB.DocumentClient();

route.get("/Twitter", function (res, req) {
  var params = {
    TableName: "twitter-sentiment-data",
  };

  documentClient.scan(params, onScan);

  function onScan(err, data) {
    if (err) {
      res.send("Unable to scan");
    } else {
      res.send(data.Items);
    }
  }
});

route.get("/Currency", function (req, res) {
  var params = {
    TableName: "Fixer1",
  };

  documentClient.scan(params, onScan);

  function onScan(err, data) {
    if (err) {
      res.send("Unable to scan");
    } else {
      res.send(data.Items);
    }
  }
});

route.get("/Synthetic", function (req, res) {
  var params = {
    TableName: "synt-data",
  };

  documentClient.scan(params, onScan);

  function onScan(err, data) {
    if (err) {
      res.send("Unable to scan");
    } else {
      res.send(data.Items);
    }
  }
});

module.exports = route;
