const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");

const router = express.Router();

router
  .route("/")
  .post(authMiddleware, accessChat)
  .get(authMiddleware, fetchChats);

router.route("/group").post(authMiddleware, createGroupChat);

router.route("/rename-group").put(authMiddleware, renameGroup);

router.route("/add-group").put(authMiddleware, addToGroup);

router.route("/remove-group").put(authMiddleware, removeFromGroup);

module.exports = router;
