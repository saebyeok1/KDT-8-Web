// 애벌레  Day5-> practice3.html 코드를 nodejs 와 ejs를 이용해 출력해보세요
const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/public", express.static("./public"));
// app.use(express.static("./public"));

app.get("/", (request, response) => {
  response.render("practice1");
});

// app.get("/public", (request, response) => {
//   response.render("practice1");
//   response.render("grass");
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
