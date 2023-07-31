const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
// 미들웨어 작성, 정석처럼 작성함
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// router
app.get("/", (req, res) => {
  // res.send("hello");
  res.render("index", { title: "폼 실습" });
});

// getForm router 생성
app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result", {
    title: "GET 요청 폼 결과 확인하기",
    userInfo: req.query,
    // userInfo: (id:'', pw:'')
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: req.body,
    // userInfo: (id:'', pw:'')
  });
});

// app.put("/", (req, res) => {
//   console.log(req.body);
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
