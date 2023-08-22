const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "boyo";

const userInfo = { id: "kdt8", pw: "1234", name: "홍길동", age: 23 };

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: uId, pw: uPw } = userInfo;
    if (id === uId && pw === uPw) {
      const token = jwt.sign({ id }, SECRET);
      console.log(token);
      res.json({ result: true, token });
    } else {
      res.json({ result: false, message: "로그인 정보가 올바르지 않습니다." });
    }
  } catch (error) {
    console.log(error);
  }

  // if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
  //   const { id } = req.body;
  //   const token = jwt.sign({ id }, SECRET);
  //   console.log(token);
  //   res.send();
  // }
});

// 검증
app.post("/token", (req, res) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ");
    try {
      const result = jwt.verify(token[1], SECRET);
      console.log("result", result);
      if (result.id === userInfo.id) {
        res.json({ result: true, name: userInfo.name });
      }
    } catch (error) {
      console.log(error);
      res.json({ result: false, message: "인증된 회원이 아닙니다." });
    }
  } else {
    res.redirect("/login");
  }

  // console.log(req.headers.authorization);
  // const auth = req.headers.authorization;
  // const token = auth.split(" ");
  // console.log(token);
  // if (token[0] === "Bearer") {
  //   jwt.verify(token[1], SECRET, (err, decoded) => {
  //     if (err) {
  //       return res
  //         .status(403)
  //         .send({ result: false, message: "검증에 실패하였습니다" });
  //     }
  //     res.send({ result: true, user: decoded });
  //   });
  // } else {
  //   res.send({ result: false, message: "올바른 인증방식이 아닙니다" });
  // }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
