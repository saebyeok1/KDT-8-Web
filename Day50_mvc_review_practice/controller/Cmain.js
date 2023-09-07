const userModel = require("../model/Model");

exports.main = (req, res) => {
  res.render("index");
};

exports.userList = (req, res) => {
  res.render("userList2", { data: userModel });
};

// exports.addUserList = (req, res) => {
//   console.log(req.body);
//   const { name, gender, major } = req.body;
//   res.json({ result: true, userInfo: { name, gender, major } });
// };

exports.user = (req, res) => {
  console.log(req.params);
  res.render("user", { data: userModel[Number(req.params.id) - 1] });
};

// 내가 헷갈렸고 실수한 코드
// 배열에 값을 추가하는 것은 push()
exports.addUserList = (req, res) => {
  const { name, gender, major } = req.body;
  userModel.push({
    id: userModel.length + 1,
    name,
    gender,
    major,
  });
  console.log(userModel);
  res.send(userModel);
};
