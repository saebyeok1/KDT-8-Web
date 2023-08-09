const express = require("express");
const controller = require("../controller/Cmain.js");
const router = express.Router();

router.get("/", controller.main); // GET / 에서 실행
router.get("/comments", controller.comments); // GET /comments 경로에 들어왔을 때 실행
router.get("/comment/:id", controller.comment); // GET /comment/:id

module.exports = router;
