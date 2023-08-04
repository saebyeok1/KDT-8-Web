const express = require("express");
const app = express();
const multer = require("multer");
// path: 경로를 가져오는 모듈 (내장 모듈이라 따로 설치필요X)
const path = require("path");
const PORT = 8000;

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 파일 설정
app.use("/uploads", express.static(__dirname + "/uploads"));

// multer setting
const upload = multer({
  // dest: 업로드할 파일을 저장할 경로를 지정
  dest: "uploads/",
});

// 세부 설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // diskStorage: 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  storage: multer.diskStorage({
    destination(req, file, done) {
      // 뒤에 있는 done은 콜백이라고 생각하면 됨
      // done에 null 값은 오류처리하는 용도(지금은 안할거라 null임)
      done(null, "uploads/");
    },
    filename(req, file, callback) {
      // 파일 경로의 확장자를 가져오는 코드
      const ext = path.extname(file.originalname);
      callback(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  // 용량제한 (5mb)
  limits: { fileSize: 1024 * 1024 * 5 },
});

app.get("/", (req, res) => {
  res.render("index");
});

// 하나의 파일 전송
app.post("/upload", uploadDetail.single("userFile"), (req, res) => {
  console.log(req.file); // 파일은 req.file로 확인해야함
  console.log(req.body);
});

// 여러개 파일 전송 ver1
app.post("/upload/array", uploadDetail.array("userFiles"), (req, res) => {
  console.log(req.files); // 멀티는 files임
  console.log(req.body);
});

// 여러개 파일 전송 ver2
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
  }
);

// 동적 파일 업로드
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file);
    console.log(req.body);
    // 프론트에 파일을 다시 보내 보여줌
    res.send(req.file);
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
