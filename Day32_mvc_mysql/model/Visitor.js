// exports.getVisitors = () => {
//   return [
//     {
//       id: 1,
//       name: "김보영",
//       comment: "춥다",
//     },
//     {
//       id: 2,
//       name: "김보영2",
//       comment: "집가고싶다",
//     },
//   ];
// };

const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

// mysql 연결 후
// DB visitor 값 갖고오기
exports.getVisitors = (callback) => {
  const sql = "SELECT * FROM visitor;";
  conn.query(sql, (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js: ", rows);
    callback(rows);
  });
};

exports.postVisitors = (callback) => {
  conn.query(`INSERT INTO visitor (name,comment) values(?,?);`, (err, rows) => {
    if (err) throw err;
    console.log("Visitor post: ", rows);
    callback(rows);
  });
};
