const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 8000;

// http 서버 연결
const server = http.createServer(app);
// socket 서버
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("practice2");
});
///////////소켓
io.on("connection", (socket) => {
  console.log("id", socket.id);
  console.log("조인 전", socket.rooms);
  socket.on("join", (chatroom) => {
    socket.room = chatroom;
    socket.join(chatroom);
    console.log("조인 후 ", socket.rooms);

    // broadcast 포함시 나를 제외한 전체 사용자에게 메세지 전달
    socket.broadcast.to(chatroom).emit("userjoin", chatroom);
  });
  socket.on("message", (message) => {
    // room에 기존에 있던 사용자들에게 메세지를 보내줌
    // io.to(방).emit(이벤트): 특정방에 전체 사용자에게 메시지 전달
    io.to(socket.room).emit("chat", `${message}`);
  });

  //   socket.on("new_message", (arg, cb) => {
  //     console.log(arg);
  //     cb(arg);
  //   });
});

// 서버오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
