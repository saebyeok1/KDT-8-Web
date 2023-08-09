const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

const app = express();
const PORT = 8000;

router.get("/", controller.main);

// 방명록 전체 조회
router.get("/visitor", controller.getVisitors);

// 방명록 하나 조회
router.get("/visitor/get", controller.getVisitors);

// 방명록 하나 추가
// router.get("/visitor/write", controller.postVisitors);

// 방명록 하나 수정
router.patch("/visitor/edit", controller.getVisitors);

// 방명록 하나 삭제
router.delete("/visitor/delete", controller.getVisitors);

module.exports = router;
