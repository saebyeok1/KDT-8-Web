const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/public", express.static("./public"));
// app.use("/views", express.static("./views"));

app.get("/", (req, res) => {
  res.render("practice4");
});
// 앞에 ""는 무조건 도메인 주소라고 그냥..외우기
app.get("/practice1", (req, res) => {
  res.render("practice1");
});

app.get("/practice2", (req, res) => {
  res.render("practice2");
});

app.get("/practice3", (req, res) => {
  res.render("practice3");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
