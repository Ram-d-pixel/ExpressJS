const express = require("express");
const app = express();
const fs = require("fs");
const excelToJson = require("./exceltojson.js");
const jsonSearch = require("./jsonsearch.js");
port = require("portastic");
options = {
  min: 8000,
  max: 8040,
};
var randNum = Math.floor(Math.random() * 40) + 1;

app.get("/XL2JSON", (_req, res) => {
  try {
    excelToJson.run().then((message) => {
      if (!message) {
        res.setHeader("Content-Type", "image/jpeg");
        const errorImg = fs.readFileSync(
          "D:/Local_training/airbnb/resource404.jpg"
        );
        res.writeHead(404);
        res.end(errorImg);
      } else {
        res.end(message);
      }
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/JSON", (req, res) => {
  const requestedData = req.query.filename;
  jsonSearch.runJson(requestedData).then((message) => {
    if (!message) {
      jsonSearch.allFiles().then((resdata) => {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(404);
        res.end(resdata);
      });
    }
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(message);
  });
});

port.find(options, function (data) {
  app.listen(data[randNum], () => {
    console.log(`Server listening on port ${data[randNum]}`);
  });
});
