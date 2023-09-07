const http = require('http');
const ws = require('ws');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

// 웹소켓 서버 접송
const wss = new ws.Server({ server });

// 웹 브라우저(클라리언트)들을 담을 변수 선언
const sockets = [];
const user = [];
// socket변수는 접속한 브라우저
wss.on('connection', (socket) => {
    console.log('클라이언트가 연결되었습니다.');
    // sockets 배열에 브라우저 추가
    sockets.push(socket);

    socket.on('message', (message) => {
        // 웹 소켓을 통해 클라이언트와 서버간의 데이터를 주고 받을 때는 일반적으로 문자열 또는 버퍼형태로 전달됨
        // 서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 객체를 일련의 바이트로 변환하는 직렬화 과정이 필요함 => 버프를 쓰는 이유
        // msg : {user:"fdf"`,msg:"dfs"}
        const msg = JSON.parse(message);
        console.log(`클라이언트로부터 받은 메세지: ${msg.msg}`);
        // send: 클라이언트로 응답 메세지 전송
        // socket.send(`서버 메세지: ${message}`);
        // sockets에 push도 가능하지만 wss.clients로도 접근이 가능함
        sockets.forEach((elem) => {
            elem.send(`${msg.user}: ${msg.msg}`);
        });
    });

    //   socket.on("message", (message) => {
    //     user.forEach((elem) => {
    //       elem.send(`사용자: ${message}`);
    //     });
    //   });
    // 오류
    socket.on('error', (err) => {
        console.log(`에러가 발생했습니다!`, err);
    });
    // 접속 종료
    socket.on('close', () => {
        console.log('클라이언트와 연결이 종료됨');
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
