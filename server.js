const express = require("express");
const ejs = require("ejs");

const PORT = 3000;

const app = express();

var path = require("path");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/product", (req, res) => {
  res.render("products-show");
});

app.get("/order", (req, res) => {
  res.render("google-map");
});

app.listen(process.env.PORT || PORT, function () {
  console.log("Listening to changes");
});
