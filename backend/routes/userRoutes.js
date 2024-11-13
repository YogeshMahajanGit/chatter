const express = require("express");
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/userControllers");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser).get(authMiddleware, allUsers);
router.post("/login", loginUser);

module.exports = router;
