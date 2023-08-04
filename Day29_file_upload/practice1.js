const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 정적 파일 세팅
app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    //   파일을 저장할 곳
    destination(req, file, done) {
      done(null, "uploads/");
    },
    //   파일 명
    filename(req, file, done) {
      console.log("filename: ", req.body);
      const ext = path.extname(file.originalname);
      // 폼 태그에서 post로 전송하기 때문에 req.body로 받을 수 있음
      done(null, req.body.userId + Date.now() + ext);
    },
  }),
  limits: { fileSize: 1024 * 1024 * 5 },
});

// router부터는 순서를 지켜서 작성해야 됨
app.get("/", (req, res) => {
  res.render("practice1");
});

app.post("/result", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file);
  res.render("result", {
    userInfo: req.body,
    // 경로를 넣어주면 이미지 출력이 되니까
    profile: req.file.path,
  });
});

// listen 밑으로는 코드가 안 읽힘
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
