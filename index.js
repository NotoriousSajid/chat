const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const database = require("./utils/moongose");
const Chat = require("./models/chat");
const cors = require("cors");

app.use(express.static("client/build"));

database();

app.use(cors());

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnect");
  });
  socket.on("new message", (data) => {
    io.emit("message", {
      name: data.name,
      message: data.message,
    });
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
