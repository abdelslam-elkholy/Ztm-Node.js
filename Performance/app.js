const express = require("express");
const app = express();

app.get("/api/", (req, res) => {
  res.send("HEY");
});

app.get("delay", (req, res) => {
  res.send("HEY DElllllllllaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay");
});

module.exports = app;
