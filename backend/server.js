const express = require("express");
const { chats } = require("./data/data");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();

connectDB();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello form sever");
});

app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started at ${PORT} 🚀`));
