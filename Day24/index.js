// 모듈 이름 = 변수 이름 (관례상)
const express = require("express");

// package.json => "type": module
// import express from "express";

// app이라는 값을 express()에 넣어줘야함
const app = express();
// react에서 프론트 포트를 3000으로 자동으로 잡아줘서 리더님은 8000번대 포트를 주로 사용함
const PORT = 8000;

// -----------------
// viewengine은 app.set으로 가져옴
app.set("view engine", "ejs");

// 이 viewengine을 어디에 넣을 건지 지정
// 앞에 public이라는 경로에서 뒤의 경로를 찾는

// 정적인 파일 불러오기:  viewengine을 가져오기 위해서는 좋은 코드는 아님
// public 폴더에는 정적인 파일들(css, image, 등..)
// app.use("public" (앞에는도메인 주소), express.static("./public")); (해당 실 주소)
app.use("public", express.static("./public"));
// 위와 같은 코드 , 이게 더 적당한 방법
app.set("views", "./views");

//------------------

// "/"-> 도메인 (http://localhost:8000/ 으로 감)
// if "/app" = http://localhost:8000/app 으로 가야 열림
// app.get(http 통신 방식=> get방식으로 열었다는 뜻)
// 콜백함수는 (요청과 응답이 있어야함)
// 요청(request) : 프론트에서 (뭘 해달라고)주는 것, 응답(response): node.js가 응답해주는 것

app.get("/", (request, response) => {
  // response.send("hello express");
  // send: 프론트 쪽으로 보내준다고 생각하면 됨
  // send() 클라이언트에 응답 데이터를 보낼때
  //   response.send({
  //     result: true,
  //     code: 1000,
  //     message: "회원가입에 성공하였습니다",
  //     data: { name: "boyo" },
  //   });

  // render() 뷰 엔진 렌더링
  response.render("test", { data: "boyo" });
});

// listen: http 랑 동일하게 서버를 열어주는 역할
// 콘솔 로그는 브라우저에서 뜨지 않음, 터미널에서만 뜸
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// console.log(express);
