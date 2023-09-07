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
  res.render("practice1");
});

///////////소켓
io.on("connection", (socket) => {
  socket.on("hello", (data) => {
    console.log(`${data.name}: ${data.message}}`);
    socket.emit("cbHello", { name: "hello", message: "안녕하세요." });
  });
  socket.on("study", (data) => {
    console.log(`${data.name}: ${data.message}}`);
    socket.emit("cbStudy", { name: "study", message: "공부합시다!!" });
  });
  socket.on("bye", (data) => {
    console.log(`${data.name}: ${data.message}}`);
    socket.emit("cbBye", { name: "bye", message: "잘가~" });
  });
});

// 서버오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
