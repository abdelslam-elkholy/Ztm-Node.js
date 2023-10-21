const Model = require("../Models/friends.model");

const getFriends = (req, res, next) => {
  res.status(200).json(Model);
};

const getOneFriend = (req, res, next) => {
  const id = req.params.id * 1;
  const friend = Model[id];

  if (!friend) return res.status(404).json({ error: " not found" });
  res.status(200).json(friend);
};

const createFriend = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Invalid" });
  }
  const friend = {
    name: req.body.name,
    id: Model.length,
  };
  res.status(201).json(friend);
  Model.push(friend);
};

module.exports = {
  getFriends,
  getOneFriend,
  createFriend,
};
