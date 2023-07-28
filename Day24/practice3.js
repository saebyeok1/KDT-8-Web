// 데이터로 구구단을 만들기
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/public", express.static("./public"));

app.get("/", (req, res) => {
  res.render("practice3", { data: 4 });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
