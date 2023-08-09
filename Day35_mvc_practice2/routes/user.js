const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 회원가입
router.get("/signup", controller.signUpUser);

// 로그인
// router.get("/signin", controller.signInUser);

// 회원정보 수정
// router.patch("/profile/edit", controller.editUser);

// 회원정보 삭제
// router.delete("/profile/delete", controller.deleteUser);

module.exports = router;
