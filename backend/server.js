const express = require("express");
const { chats } = require("./data/data");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello form sever");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const id = req.params.id;
  const singleChat = chats.find((c) => c._id === id);
  res.send(singleChat);
});

app.listen(PORT, console.log(`Server started at ${PORT} 🚀`));
