const express = require("express");
const app = express();
const PORT = 8000;
const multer = require("multer");
const path = require("path");
const upload = multer({
  dest: "uploads/",
});

app.set("view engine", "ejs");
// use: 미들웨어 사용할 때
// dirname: 현재 디렉토리까지의 경로 (절대경로)
app.use("/views", express.static(__dirname + "/views"));
app.use("/uploads", express.static(__dirname + "/uploads"));

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("index");
});

// 싱글 파일 업로드
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("upload!!");
});

// 여러개 파일 업로드
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files); // 업로드한 파일 정보 [{},{}]
  console.log(req.body);
  res.send("여러개 파일 upload!!");
});

app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("여러개 파일 upload!!!");
  }
);

// 이름은 append할 때 지정해준 이름임
app.post(
  "/upload/dynamic",
  uploadDetail.single("dynamicupload"),
  (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send(req.file);
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
