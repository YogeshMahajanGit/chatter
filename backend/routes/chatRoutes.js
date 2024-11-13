const express = require("express");

const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

// router.route("/").post(authMiddleware, accessChat).get(authMiddleware,fetchChats);

// router.route("/group").post(authMiddleware,createGroupChat)

// router.route("rename-group").put(authMiddleware,renameGroup)

// router.route("remove-group").put(authMiddleware,removeGroup)
// router.route("add-group").put(authMiddleware,addGroup)

module.exports = router;
