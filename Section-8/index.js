const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  console.log(req.method, req.url, `Time:${Date.now() - start}`);
});

app.use(express.json());

app.listen(PORT, () => console.log(`Server Is Working on Port: ${PORT}`));
