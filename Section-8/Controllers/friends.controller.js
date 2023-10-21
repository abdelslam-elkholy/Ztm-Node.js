exports.getFriends = (req, res, next) => {
  res.status(200).json(friends);
};

exports.createFriend = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Invalid" });
  }
  const friend = {
    name: req.body.name,
    id: friends.length,
  };
  res.status(201).json(friend);
  friends.push(friend);
};
