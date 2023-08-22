const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// session
// 옵션객체
// httpOnly: 값 true 설정 시에 사용자가 자바스크립트를 통해서 세션을 사용할 수 없도록 강제함
// secure: 값을 true로 하면 https에서만 세션을 주고 받음
// **가장 중요 거의 필수로 사용한다고 보면됨** secret: 안전하게 쿠키를 전송하기 위해 쿠키서명 값(세션을 발급할 때 사용되는 키)
// resave: 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션을 다시 저장할 것인지 물어봄. 덮어쓰기 가능하게 하기
// saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할 지 설정
app.use(
  session({
    secret: "mySessionKey",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  // 세션설정
  req.session.name = "홍길동";
  res.send("세션 설정 완료");
});

app.get("/name", (req, res) => {
  res.send(req.session.name);
});

// 세션이 삭제되고 난 후엔 더이상 접근하면 안되기 때무에 콜백함수로 삭제햐여해서 콜백함수 사용
app.get("/destroy", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(PORT, (req, res) => {
  //   console.log(`http://localhost${PORT}`);
});
