const express = require("express");

const friendsController = require("../Controllers/friends.controller");
const friendsrouter = express.Router();

app.get("/", friendsController.getFriends);
app.get("/:id", friendsController.getOneFriend);
app.post("/", friendsController.createFriend);

module.exports = friendsrouter;
