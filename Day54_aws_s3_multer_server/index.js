const express = require('express');
const multer = require('multer');
const aws = require('aws-sdk'); // aws 설정을 위한 모듈
const dotenv = require('dotenv');
const multerS3 = require('multer-s3'); // aws s3에 업로드하기 위한 multer 설정
const app = express();
const PORT = 8000;
dotenv.config();

app.set('view engine', 'ejs');
app.use('/uploads', express.static(__dirname + '/uploads'));

// aws
aws.config.update({
    accessKeyId: process.env.S3_KEYID,
    secretAccessKey: process.env.S3_ACCESSKEY,
    region: process.env.S3_REGION,
});

// aws s3 인스턴스 생성
const s3 = new aws.S3();

// multer 설정 - awsc
const upload = multer({
    storage: multerS3({
        s3,
        bucket: process.env.S3_BUCKET,
        acl: 'public-read', // 파일 접근 권한 (public-read로 해야 업로드 됨)
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString + '-' + file.originalname);
        },
    }),
});
// router
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
