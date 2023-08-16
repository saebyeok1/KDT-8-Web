const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리
app.get("/", (req, res) => {
  res.render("index");
});
const router = require("./routes");
app.use("/visitor", router);

//오류처리
app.use("*", (req, res) => {
  res.render("404");
});

// app.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}`);
// });

// force : false 설정시 없으면 생성
// true 일시 데이터가 있는 db일 시 db를 지우고 새로 생성함
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
