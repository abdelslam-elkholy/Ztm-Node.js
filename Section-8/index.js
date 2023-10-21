const express = require("express");
const app = express();
const PORT = 3000;

const friends = [
  { id: 0, name: "Friend0" },
  { id: 1, name: "Friend1" },
  { id: 2, name: "Friend2" },
  { id: 3, name: "Friend3" },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  console.log(req.method, req.url, `Time:${Date.now() - start}`);
});

app.use(express.json());

app.get("/friends/:id", (req, res, next) => {
  const id = req.params.id * 1;
  const friend = friends[id];

  if (!friend) return res.status(404).json({ error: " not found" });
  res.status(200).json(friend);
});

app.listen(PORT, () => console.log(`Server Is Working on Port: ${PORT}`));
