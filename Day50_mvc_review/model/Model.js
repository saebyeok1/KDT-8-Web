// const mysql = require("mysql");

//mysql연결
// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "kdt",
//   password: "",
//   database: "kdt",
//   port: 3306,
// });

const comments = [
  {
    id: 1,
    userid: "helloworld",
    date: "2023-08-05",
    comment: "안녕하세여~^-^",
  },
  {
    id: 2,
    userid: "hitv",
    date: "2023-08-05",
    comment: "하이티비",
  },
  {
    id: 3,
    userid: "cold",
    date: "2023-08-05",
    comment: "추워염",
  },
  {
    id: 4,
    userid: "gohome",
    date: "2023-08-05",
    comment: "집가고 싶어요",
  },
];

module.exports = comments;
