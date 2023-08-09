const Visitor = require("../model/Visitor.js");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  // mysql 연결 전 코드
  //   console.log(Visitor.getVisitors());
  //   res.render("visitor", { data: Visitor.getVisitors() });

  // mysql 연결 후
  Visitor.getVisitors((result) => {
    console.log("Cvisitor get: ", result);
    //  result 형식 [{},{},{} ]
    res.render("visitor", { data: result });
  });

  Visitor.postVisitors((result) => {
    console.log("Cvisitor post: ", {});
  });
};
