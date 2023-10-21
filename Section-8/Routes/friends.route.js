const express = require("express");

const friendsController = require("../Controllers/friends.controller");
const friendsRouter = express.Router();

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:id", friendsController.getOneFriend);
friendsRouter.post("/", friendsController.createFriend);

module.exports = friendsRouter;
