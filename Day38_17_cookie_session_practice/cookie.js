const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(cookieParser());

const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000, // 1min
};

app.get("/", (req, res) => {
  // 쿠키를 안 보이게 하려면 데이터를 하나 보냄(popup)
  // req.cookies: 객체로 옴
  console.log(req.cookies);
  res.render("index", { popup: req.cookies.modal });
});

app.post("/setCookie", (req, res) => {
  // 쿠키 생성 (쿠키이름, 쿠키키값, cookieConfig)
  res.cookie("modal", "hide", cookieConfig);
  res.send({ result: true, msg: "쿠키 생성 완료" });
});

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
