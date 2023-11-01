const express = require("express");
const app = express();

const delay = (timer) => {
  const start = Date.now();

  while (Date.now() - start < timer) {
    // delay
  }
};
app.get("/", (req, res) => {
  res.send("HEY");
});

app.get("/delay", (req, res) => {
  delay(10000);
  res.send("HEY DElllllllllaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay");
});

module.exports = app;
