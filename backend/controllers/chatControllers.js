const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

//function to access or create a one-on-one chat
const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  // Check userId
  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  // Search for existing
  let isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("letestMessage");

  isChat = await User.populate(isChat, {
    path: "letestMessage.sender",
    select: "name pic email",
  });

  //  if chat exists return
  if (isChat.lenght > 0) {
    res.send(isChat[0]);
  } else {
    // If no chat create a new chat
    const chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    //create a new one-on-one chat
    try {
      const createdChat = await Chat.create(chatData);

      const fullChat = await Chat.find({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );

      res.status(200).send(fullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

// fetches all chats
const fetchChats = asyncHandler(async (req, res) => {
  try {
    // find current user
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("letestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "letestMessage",
          select: "name pic email",
        });
        // send populated chat
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// create group chat
const createGroupChat = asyncHandler(async (req, res) => {
  // check required thinks
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "Please Fill all feilds" });
  }

  //parse data
  const users = JSON.parse(req.body.users);

  if (users.lenght < 2) {
    return res.status(400).send("More than 2 users required");
  }

  users.push(req.user);

  // create new group
  try {
    const groupChat = await Chat.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: req.user,
    });

    const fullGroupChat = await Chat.findOne({
      _id: groupChat._id,
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    res.status(200).json(fullGroupChat);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { accessChat, fetchChats, createGroupChat };
