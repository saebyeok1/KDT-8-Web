// const User = require("../model/User");
const models = require("../models");
const { Op } = require("sequelize");

// Controller에서 get으로 렌더링하는 것들은 따로 분리해놓음 ex)post,get 별로..

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signup = (req, res) => {
  // model
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log(result);
    res.send({
      result: true,
      id: result.dataValues.id,
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    });
  });
};

exports.post_signin = (req, res) => {
  // User.post_signin(req.body, (result) => {
  //   console.log(result);
  //   if (result.length > 0) {
  //     res.send({ result: true, data: result[0] });
  //   } else {
  //     res.send({ result: false, data: null });
  //   }
  // });
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("result", result);
    res.send({ result: true, data: result[0] });
  });
};

// req는 profile을 받음
exports.post_profile = (req, res) => {
  // console.log(req.body);
  // User.post_profile(req.body, (result) => {
  //   if (result.length > 0) {
  //     // select문은 배열형태로와서 []로 객체를 끌고 왔지만 여기서는 애초에 객체 상태로 오기 때문에 빼줘도 됨
  //     res.render("profile", { data: result });
  //   } else {
  //     res.redirect("/user/signin");
  //   }
  // });

  models.User.findOne({
    where: { userid: req.body.profile },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};

exports.edit_profile = (req, res) => {
  // User.edit_profile(req.body, () => {
  //   res.send({ result: true });
  // });
  // update는 2개의 객체라고 생각하면 됨
  // 첫번 째는 바꾸고 싶은 거, 두번 째는 어디서 바꿀 건지
  // models.User.update({},{})

  // 구조분해할당
  const { userid, pw, name, id } = req.body;
  models.User.update(
    {
      userid,
      pw,
      name,
    },
    {
      where: { id },
    }
  ).then((result) => {
    // update는 바뀔 인덱스 값만 숫자로 나옴
    console.log("result", result);
    res.send({ result: true });
  });
};

exports.delete_profile = (req, res) => {
  // User.delete_profile(req.body.id, () => {
  //   res.send({ result: true });
  // });

  const { id } = req.body;
  models.User.destroy({ where: { id } }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};

// router에서 작성후에 controller에서 작성
exports.findall = (req, res) => {
  models.User.findAll({
    // attributes: 원하는 컬럼 조회
    // attributes: ["name", "userid"],
    // Op.gt(초과), Op.get(이상), Op.lt(미만), op.ne(같지 않은)
    // Op.or(또는), Op.in(배열 요소 중 하나), Op.notIn(배열 요소와 모두 다름)

    // id가 4이상인 값만 출력
    where: { id: { [Op.gte]: 4 } },
    // id를 역순으로 정렬
    order: [["id", "DESC"]],
    // 4 이상중에 역순으로 한개만 출력
    limit: 1,
    // 4 이상 중에 한칸뛰고 출력
    offset: 1,
  }).then((result) => {
    console.log("reuslt", result);
    res.send(result);
  });
};
