const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// router.get("/", controller.main);

//router
router.get("/", controller.main);

// 전체 목록 보기
// GET /comments
router.get("/comments", controller.comments);

// 댓글 상세보기
// GET /comments/:id
router.get("/comment/:index", controller.comment);

module.exports = router;
