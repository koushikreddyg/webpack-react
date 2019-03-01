const express = require("express");
const path = require("path");
const io = require("socket.io")();

io.on("connection", socket => {
  socket.on("chat-message", msg => {
    io.to(`${msg.socketId}`).emit("chat-message", msg.message);
  });
});
io.listen(2050);

const assetsPath = path.join(__dirname, "..", "public");

const PORT = 1000;

const app = express();

app.listen(PORT);

app.use(express.static(assetsPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(assetsPath, "index.html"));
});
