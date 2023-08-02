// 실습1. axios get 회원가입
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  //   res.render("practice1");
  res.render("practiceIndex");
});

// 회원가입 GET 실습
app.get("/axiosGet", (req, res) => {
  res.render("get");
});

app.get("/resultGet", (req, res) => {
  console.log("back", req.query);
  res.send({ result: true, data: req.query });
});

// 로그인 POST 실습
app.get("/axiosPost", (req, res) => {
  res.render("post");
});

app.post("/resultPost", (req, res) => {
  console.log("back", req.body);
  // 여기서!!! 변수를 지정해주고 if문을 걸어야함
  const id = "kdt8";
  const pwd = "1234";
  if (id === req.body.username && pwd === req.body.password) {
    res.send({ result: true, userInfo: req.body });
  } else {
    res.send({ result: false });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
