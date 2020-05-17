const AWS = require("aws-sdk");
var express = require("express")
var route = express.Router()

AWS.config.loadFromPath("./config.json");
var documentClient = new AWS.DynamoDB.DocumentClient();

route.get("/Twitter", function (res, req) {
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

route.get("/Currency", function (res, req) {
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

route.get("/Synthetic", function (res, req) {
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

module.exports = route