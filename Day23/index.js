// 외부 모듈을 불러오려면 require이 필요함 (변수에 담아)
// const mod = require("./module.js");
// console.log(mod);

// http 모듈 서버 만들기
// http 모듈을 갖고와서 사용함

const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  response.writeHead(200); // 응답헤더, 성공하면 200을 보내줌
  response.write("<h1>hello world</h1>"); // 본문 작성 내용
  response.end("<P>End</p>"); // 끝냄

  // 파일전송
  //   try {
  //     const data = fs.readFileSync("../Day23/index.html");
  //     response.writeHead(200);
  //     response.end(data);
  //   } catch (error) {
  //     console.log(error);
  //     response.writeHead(404);
  //     response.end(error.message); // error 안에 message라는 객체가 있어 연결해줌
  //   }
});

server.listen(8000, function () {
  console.log(`localhost:8000포트로 실행`);
});
