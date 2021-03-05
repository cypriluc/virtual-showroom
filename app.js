const express = require("express");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const fs = require("fs");
const buildFiles = fs.readdirSync(__dirname + "/public/Build/");
let currentJson = "";
buildFiles.forEach(function (file) {
  let fileType = file.split(".").pop();
  if (fileType == "json") {
    currentJson = file;
  }
});

app.get("/", function (req, res) {
  res.render("home", {
    currentJson: currentJson,
  });
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
