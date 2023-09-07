const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.get("/userList", controller.userList);
router.get("/user/:id", controller.user);
// router.post("/userList", controller.addUserList);
router.post("/userList", controller.addUserList);

module.exports = router;
