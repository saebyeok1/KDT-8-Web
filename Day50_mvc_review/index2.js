const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const comments = [
  {
    id: 1,
    userid: "helloworld",
    date: "2023-08-05",
    comment: "안녕하세여~^-^",
  },
  {
    id: 2,
    userid: "hitv",
    date: "2023-08-05",
    comment: "하이티비",
  },
  {
    id: 3,
    userid: "cold",
    date: "2023-08-05",
    comment: "추워염",
  },
  {
    id: 4,
    userid: "gohome",
    date: "2023-08-05",
    comment: "집가고 싶어요",
  },
];

// --> router들을 routes에 있는 main.js로 옮겨주고 router 선언해주면 됨
//router
app.get("/", (req, res) => {
  res.render("index");
});

// 전체 목록 보기
// GET /comments
app.get("/comments", (req, res) => {
  res.render("comments", { lists: comments });
});
// 댓글 상세보기
// GET /comments/:id
app.get("/comment/:index", (req, res) => {
  console.log(req.params);
  // {id:"1"} 콜론: 뒤에 붙은 변수가 key, 그 값이 value
  res.render("comment", { data: comments[Number(req.params.index) - 1] });
});

//오류처리
app.use("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
