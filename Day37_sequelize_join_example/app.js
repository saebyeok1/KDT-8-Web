const express = require("express");
const app = express();
const PORT = 8000;
const db = require("./models");

app.set("view engine", "ejs");
// 사실 생략가능 > views 폴더는 nodejs에서 가져옴 > 폴더명을 다르게 할 때 작성해주면 됨
// app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes 뒤에 생략 가능한건 index뿐
const router = require("./routes/student");
app.use("/", router);

db.sequelize
  .sync({
    force: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  });
