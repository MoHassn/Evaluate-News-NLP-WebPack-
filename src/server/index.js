require("dotenv").config();
var path = require("path");
const express = require("express");
const axios = require("axios");

const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.post("/test", async function (req, res) {
  console.log("body", req.body);
  const response = await axios({
    url: "https://api.meaningcloud.com/sentiment-2.1",
    method: "POST",
    params: {
      key: process.env.API_KEY,
      lang: "en",
      url: "https://flaviocopes.com/webhooks/",
    },
  });
  const data = response.data;
  console.log("data", response.data);
  res.send(data);
});
