//jshint esversion:6
const express = require("express");
const mongoose = require("mongoose");
const { static } = require("express");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/Bob-condition", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

  console.log(__dirname);
app.use("/public", express.static(__dirname + '/public'));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, function () {
  console.log(`you are now listening into port ${port}`);
});
