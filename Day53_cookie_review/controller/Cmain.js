// const model = require('../model/Model');
const { User } = require("../models");
const bcrypt = require("bcrypt");

// 쿠키 설정
const cookieConfig = {
  // 자바스크립트 접근X
  httpOnly: true,
  maxAge: 60 * 1000, // 1분
};

///////////////////////////////////////
//GET
const main = (req, res) => {
  // 쿠키사용
  console.log("cookie", req.cookies);
  // 메인페이지 접속시 쿠키값 활용해 로그인 해주세요
  if (!req.cookies.isLogin) {
    res.render("index", { cookie: false });
  } else {
    res.render("index", { cookie: true });
  }
};
//회원가입 페이지
const signup = (req, res) => {
  // 쿠키생성
  // res.cookie(쿠키이름, 쿠키값, 옵션객체)
  //   res.cookie("testCookie", "test", cookieConfig);
  res.render("signup");
};
//로그인 페이지
const signin = (req, res) => {
  if (req.session.userInfo) {
    res.redirect(`/profile/${req.session.userInfo.id}`);
  }
  res.render("signin");
};
//회원정보 조회 페이지
const profile = (req, res) => {
  console.log(req.params);
  console.log(req.session.userInfo, req.sessionID);
  // model.db_profile(req.params, (result) => {
  //     res.render('profile', { data: result[0] });
  // });
  //findOne 데이터베이스에서 하나의 정보를 찾을 때 사용, 객체 반환
  //where 는 객체형태로 찾을 정보를 입력
  User.findOne({
    where: { id: req.params.init },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};

// 실습문제 - 회원 전체 리스트 보기
// 로그인시에만 회원 전체보기
const userlist = (req, res) => {
  if (req.session.userInfo) {
    User.findAll().then((result) => {
      res.render("userlist", { name: req.session.userInfo.name, result });
    });
  } else {
    res.redirect("/signin");
  }
};
////////////////////////////////////////////////
//POST
//회원가입
const post_signup = async (req, res) => {
  // model.db_signup(req.body, () => {
  //     res.json({ result: true });
  // });
  const { userid, name, pw } = req.body;
  //create 데이터 생성
  //실습과제 - 비밀번호 암호화하여 저장
  const hash = await bcryptPassword(pw);
  User.create({
    userid,
    name,
    pw: hash,
  }).then(() => {
    res.json({ result: true });
  });
};

const post_signin = async (req, res) => {
  // model.db_signin(req.body, (result) => {
  //     if (result.length > 0) {
  //         res.json({ result: true, data: result[0] });
  //     } else {
  //         res.json({ result: false });
  //     }
  // });
  //실습과제 - 로그인
  const { userid, pw } = req.body;
  //step1 아이디를 찾아서 사용자 존재 유/무 체크
  const user = await User.findOne({
    where: { userid },
  });
  // const user = {
  //     id: 1,
  //     userid: 'asdf',
  //     name: '홍길동',
  //     pw: '@@@@@@@@@@'
  // }

  if (user) {
    //step2 입력된 비밀번호와 기존 데이터와 비교
    //사용자가 존재함
    const result = await compareFunc(pw, user.pw);
    if (result) {
      //비밀번호 일치
      res.cookie("isLogin", true, cookieConfig);
      // req.session.userInfo = { name: user.name, id: user.id };
      // jwt token은 만들어놓을 수는 있음
      const token = jwt.sign({ name: user.name, id: user.id }, SECRET);
      res.json({ result: true, token, data: user });
    } else {
      //비밀번호 틀림
      res.json({ result: false, message: "비밀번호가 틀렸습니다." });
    }
  } else {
    //사용자가 존재하지 않음
    res.json({ result: false, message: "존재하는 사용자가 없습니다" });
  }
};
///////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
  // model.db_profile_edit(req.body, () => {
  //     res.json({ result: true });
  // });
  //update( 수정될 정보를 객체형태로 입력, 수정될 곳 객체 입력  )
  //   const { name, pw, id } = req.body;
  //   User.update({ name, pw }, { where: { id } }).then(() => {
  //     res.json({ result: true });
  //   });
  console.log(req.headers.authorization);
  const [bearer, token] = req.headers.authorization.split(" ");
  const { name, pw, id } = req.body;
  if (bearer === "Bearer") {
    // 토큰 인증

    // try {
    //   const result = jwt.verify(token, SECRET);
    //   console.log(result);
    // } catch (error) {
    //   console.log(error);
    //   res.json({ result: false });
    // }
    const result = jwt.verify(token, SECRET);
    // 사용자 찾고
    console.log(result);
    // 토큰을 검증하는 것
    User.update({ name, pw }, { where: { id } }).then(() => {
      req.json({ result: true });
    });
  } else {
    res.json({ result: false, message: "인증방식이 틀렸습니다" });
  }
};

/////////////////////////////////////////////
//DELETE
//회원탈퇴 destory()
const destroy = (req, res) => {
  const { id } = req.body;
  User.destroy({
    where: { id },
  }).then(() => {
    // 쿠키삭제
    // res.clearCookie(쿠키이름)
    res.clearCookie("testCookie");
    // 세션삭제
    req.session.destroy();
    res.json({ result: true });
  });
};

module.exports = {
  main,
  signup,
  signin,
  profile,
  post_signup,
  post_signin,
  edit_profile,
  destroy,
  userlist,
};

///////////////////////////function
//암호화
//화살표함수 축약형 {} 삭제, return 삭제 (한줄코드일때사용!!)
const bcryptPassword = (password) => bcrypt.hash(password, 11);
//비교
const compareFunc = (password, dbpass) => bcrypt.compare(password, dbpass);
