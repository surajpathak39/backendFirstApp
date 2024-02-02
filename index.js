require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("this is about app");
});

app.get("/learn", (re, res) => {
  res.send("this is backend learning");
});
app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
