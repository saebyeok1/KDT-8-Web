// const express = require("express");
import express from "express";
// const controller = require("../controller/Cuser");
import * as controller from "../controller/Cuser.js";

const router = express.Router();

// 실습 문제 그대로 router 만들어주면 됨

// GET localhost:8000/user
router.get("/", controller.index);
// GET localhost:8000/user/signup
router.get("/signup", controller.signup);
// // POST localhost:8000/user/signup
router.post("/signup", controller.post_signup);

// 로그인
router.get("/signin", controller.signin);
router.post("/signin", controller.post_signin);

router.post("/profile", controller.post_profile);
// router.patch("/profile/edit", controller.edit_profile);
// router.delete("/profile/delete", controller.delete_profile);

// module.exports = router;
export default router;
