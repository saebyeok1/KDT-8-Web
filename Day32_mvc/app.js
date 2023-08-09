const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes"); // index.js 생략
app.use("/", indexRouter);

// router GET /
// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("*", (req, res) => {
  res.render("404");
});

// PORT open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
