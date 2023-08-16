const models = require("../models");

//전체 방명록 조회
exports.getVisitors = (req, res) => {
  // Visitor.getVisitors((result) => {
  //   res.render("visitor", { data: result });
  // });

  //SELECT * FROM visitor; 과 동일한 명령어
  models.Visitor.findAll().then((result) => {
    res.render("visitor", { data: result });
  });
};

//방명록 하나 조회
exports.getVisitor = (req, res) => {
  // Visitor.getVisitor(req.query.id, (result) => {
  //   res.render("visitor", { data: result });
  // });

  // 객체 형태로 넣어서 원하는 값을 가져올 수 있음
  models.Visitor.findOne({
    where: {
      id: req.query.id,
    },
  }).then((result) => {
    // findOne은 객체만 가져오기 때문에 다시 값을 배열로 만들어줘서 처리해줘야함
    // 우리가 만들 때 배열로 처리해서 만들었기 때문에
    res.render("visitor", { data: [result] });
  });
};

//방명록 하나 추가
exports.postVisitor = (req, res) => {
  // Visitor.postVisitor(req.body, (result) => {
  //   res.send({
  //     result: true,
  //     id: result.insertId,
  //     name: req.body.name,
  //     comment: req.body.comment,
  //   });
  // });

  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log(result);
    res.send({
      result: true,
      id: result.dataValues.id,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};
//방명록 하나 수정
exports.patchVisitor = (req, res) => {
  // Visitor.patchVisitor(req.body, () => {
  //   res.send({ result: true });
  // });
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then(() => {
    res.send({ result: true });
  });
};

//방명록 하나 삭제
exports.deleteVisitor = (req, res) => {
  // Visitor.deleteVisitor(req.body, () => {
  //   res.send({ result: true });
  // });
  models.Visitor.destroy({
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.send({ result: true });
  });
};
