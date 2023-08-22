const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// 폼 전송을 하기 때문에
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "whffuwhffu",
    resave: false,
    authinitialized: true,
    name: "mySession",
  })
);

// 회원가입이 필요 없으므로 임시 정보 생성
const userInfo = { id: "kdt8", pw: "1234" };

app.get("/", (req, res) => {
  // session의 유무를 체크함
  const user = req.session.user;
  console.log(user);
  if (user === undefined) {
    res.render("session", { isLogin: false });
  } else {
    res.render("session", { isLogin: true, user: user });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

// 보통 data전송은 post로 대부분 많이 함
app.post("/login", (req, res) => {
  // 로그인이 되는 경우
  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    // req.sesion: session 생성
    req.session.user = req.body.id;
    res.send(
      `<script>alert("${req.session.user}님 환영합니다!!");document.location.href="/";</script>`
    );
    // 로그인 성공시 메인 화면으로 가도록
    // res.redirect("session");
    // alert(`${req.session.user}님 환영합니다!`);
  } else {
    res.send(
      `<script>alert("로그인 실패");document.location.href="/";</script>`
    );
  }
});

app.get("/logout", (req, res) => {
  const user = req.session.user;

  if (user === undefined) {
    res.send(
      `<script>alert("잘못된 접근입니다.");documetn.location.href="/"</script>`
    );
  } else {
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.clearCookie("mySession");
      res.redirect("/");
    });
  }
});

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
