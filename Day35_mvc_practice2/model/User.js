const mysql = require("mysql");

// mysql연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
  port: 3306,
});

// mysql 접속 확인
conn.connect((err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connect");
});

exports.signUpUser = (data) => {
  console.log("회원가입");
  const query = `INSERT INTO user (userid,name,pw) VALUES("${data.userid}","${data.name}","${data.pw}")`;
  conn.query(query, (err, rows) => {
    console.log("signup", rows);
  });
};

// exports.signInUser = () => {
//   console.log("로그인");
//   const query = `SELECT * FROM user WHERE `;
//   conn.query(query, (err, rows) => {});
// };

// exports.editUser = (data, callback) => {
//   console.log("회원 정보 수정");
//   const query = `UPDATE user SET userId="${data.id}", name="${data.name}", pw="${data.pw}" WHERIE id=${req.body.id} `;
//   conn.query(query, (err, rows) => {
//     console.log(rows);
//     callback(rows);
//   });
// };

// exports.deleteUser = (data, callback) => {
//   console.log("회원정보 삭제");
//   const query = `DELETE FROM user WHERE id=${data.id}`;
//   conn.query(query, (err, rows) => {
//     callback(rows);
//   });
// };
