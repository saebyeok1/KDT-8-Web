const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

// 페이지를 열어주기 때문에 get방식으로 가져오고
app.get("/", (req, res) => {
  res.render("practice2");
});

// 보여주는건 post 방식
app.post("/getPost", (req, res) => {
  console.log(req.body);
  res.render("practice2Result", {
    userInfo: req.body,
  });
});

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
