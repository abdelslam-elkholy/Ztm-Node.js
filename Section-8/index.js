const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

const friendsRoute = require("./Routes/friends.route");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  console.log(req.method, req.url, `Time:${Date.now() - start}`);
});

app.use(express.json());

app.get("/", (req, res, next) => {
  res.render("index", {
    title: "Home Page",
    items: ["hey", "you"],
  });
});

app.use("/friends", friendsRoute);
app.listen(PORT, () => console.log(`Server Is Working on Port: ${PORT}`));
