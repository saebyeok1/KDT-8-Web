const User = require("../model/User");

// 회원가입
exports.signUpUser = (req, res) => {
  User.signUpUser(() => {
    res.render("signup");
  });
};

// 로그인
// exports.signInUser = (req, res) => {
//   User.signInUser(() => {});
// };

// 회원정보 수정
exports.editVisitor = (req, res) => {
  User.editVisitor(req.body, () => {
    res.send({ result: true });
  });
};

// 회원정보 삭제
exports.deleteUser = (req, res) => {
  User.deleteUser(req.body, () => {
    res.send({ result: true });
  });
};
