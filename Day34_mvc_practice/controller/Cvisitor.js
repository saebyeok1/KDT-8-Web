const Visitor = require("../model/Visitor");

// 전체 방명록 조회
exports.getVisitors = (req, res) => {
  Visitor.getVisitors((result) => {
    res.render("visitor", { data: result });
  });
  // model Visitor.js로 옮겨줌
  //   const query = `SELECT * FROM visitor`;
  //   conn.query(query, (err, rows) => {
  //     console.log("visitor", rows);
  //     res.render("visitor", { data: rows });
  //   });
};

// 방명록 하나 조회
exports.getVisitor = (req, res) => {
  Visitor.getVisitor(req.query.id, (result) => {
    res.render("visitor", { data: result });
  });
  //   console.log("방명록 하나 조회");
  //   const query = `SELECT * FROM visitor WHERE id=${req.query.id}`;
  //   conn.query(query, (err, rows) => {
  //     console.log(rows);
  //     res.render("visitor", { data: rows });
  //   });
};

// 방명록 하나 추가
exports.postVisitor = (req, res) => {
  Visitor.postVisitor(req.body, (result) => {
    res.send({
      result: true,
      id: result.insertId,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
  //   console.log("방명록 하나 추가");
  //   const query = `INSERT INTO visitor (name, comment) VALUES ("${req.body.name}", "${req.body.comment}")`;
  //   conn.query(query, (err, rows) => {
  //     console.log("write", rows);
  //     res.send({
  //       result: true,
  //       id: rows.insertId,
  //       name: req.body.name,
  //       comment: req.body.comment,
  //     });
  //   });
};

// 방명록 하나 수정
exports.patchVisitor = (req, res) => {
  Visitor.patchVisitor(req.body, () => {
    res.send({ result: true });
  });
  //   console.log("방명록 하나 수정");
  //   const query = `UPDATE visitor SET name="${req.body.name}",comment="${req.body.comment}" WHERE id=${req.body.id}`;
  //   conn.query(query, (err, rows) => {
  //     console.log(rows);
  //     res.send({ result: true });
  //   });
};

// 방명록 하나 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.deleteVisitor(req.body, () => {
    res.send({ result: true });
  });
  //   console.log("방명록 하나 삭제");
  //   const query = `DELETE FROM visitor WHERE id=${req.body.id}`;
  //   conn.query(query, (err, rows) => {
  //     res.send({ result: true });
  //   });
};
