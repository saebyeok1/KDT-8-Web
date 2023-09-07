const commentsModel = require("../model/Model");

// 방법1
// const main = (req, res) => {
//   res.render("index");
// };

// const comments = (req, res) => {
//   res.render("comments", { lists: commentsModel });
// };

// const comment = (req, res) => {
//   console.log(req.params);
//   res.render("comment", { data: commentsModel[Number(req.params.index) - 1] });
// };

// module.exports = {
//   main: main,
//   comm: comments,
//   comment,
// };

// 방법2
exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  res.render("comments", { lists: commentsModel });
};

exports.comment = (req, res) => {
  console.log(req.params);
  res.render("comment", { data: commentsModel[Number(req.params.index) - 1] });
};

// // 모듈사용방법
// // 방법1
// const test = () => {};
// module.exports = test;

// // 방법2
// module.exports.test2 = "";
// exports.test2 = ""; //생략함
