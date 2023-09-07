const model = require("../model/Model");
// GET
const main = (req, res) => {
  res.render("index");
};

const signup = (req, res) => {
  res.render("signup");
};

const signin = (req, res) => {
  res.render("signin");
};

// -----------------------------------------------------------
// POST

const post_signup = (req, res) => {
  model.db_signup(req.body, () => {
    res.json({ result: true });
  });
};

const post_signin = (req, res) => {
  model.db_signin(req.body, (result) => {
    if (result.length > 0) {
      res.json({ result: true, data: result[0] });
    } else {
      res.json({ result: false });
    }
  });
};

// res.render: 뷰페이지를 렌더링 render(뷰페이지이름, 데이터(선택)), 뷰 => node.js가 제공하는 템플릿
// res.send: 모든 타입 데이터 전송(문자열,배열,객체)
// res.json: 객체타입 데이터 전송
// res.redirect: 페이지 이동

module.exports = {
  main,
  signin,
  signup,
  post_signin,
  post_signup,
};