const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router 분리
app.get("/", (req, res) => {
  res.render("index");
});

const router = require("./routes");
app.use("/visitor", router);
// /visitor로 설정시 routes에 있는 index.js에서 /visitor를 다 지울 수 있음

// 오류처리, 모든 호출에 대한 오류처리를 할 수 있으므로 use를 사용할 수 있음
//get, post, patch, delete는 같은 도메인을 써도 가능하지만 use는안됨
app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {});
