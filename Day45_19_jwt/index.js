const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "boyo";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
  const { id } = req.body;
  const token = jwt.sign({ id }, SECRET);
  console.log(token);
  res.send(token);
});

// 검증
app.post("/verify", (req, res) => {
  console.log(req.headers.authorization);
  const auth = req.headers.authorization;
  // split():문자열을 나눠 배열로 나옴
  const token = auth.split(" ");
  console.log(token);
  if (token[0] === "Bearer") {
    // return값을 받을 때는 try catch로 error처리를 같이 해줘야함
    // callback 함수로 할때는 아래처럼 하면됨
    jwt.verify(token[1], SECRET, (err, decoded) => {
      if (err) {
        // 토큰 값이 잘못되었을때
        return res
          .status(403)
          .send({ result: false, message: "검증에 실패하였습니다" });
      }
      // 검증 값이 성공일 때
      res.send({ result: true, user: decoded });
    });
  } else {
    res.send({ result: false, message: "올바른 인증방식이 아닙니다" });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
