// 과일바꾸기 실습
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/public", express.static("./public"));

app.get("/", (request, response) => {
  response.render("practice2");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
