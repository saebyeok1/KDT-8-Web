// const express = require("express");
import express from "express";
// const controller = require("../controller/Cuser");
import * as controller from "../controller/Cuser.js";

const router = express.Router();

// 실습 문제 그대로 router 만들어주면 됨

// GET localhost:8000/user
router.get("/", controller.index);
// GET localhost:8000/user/signup
router.get("/join", controller.signup);
// // POST localhost:8000/user/signup
router.post("/join", controller.post_signup);

// 로그인
router.get("/login", cliontroller.signin);
router.post("/login", controller.post_signin);

export default router;
