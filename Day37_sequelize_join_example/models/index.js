"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// model
db.Student = require("./Students")(sequelize);
db.Classes = require("./Classes")(sequelize);
db.StudentProfile = require("./StudentProfile")(sequelize);
// relationship
// 1:1 학생과 프로필
db.Student.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Student);

// 1:다 학생과 수업 (외래키를 지정해주지않으면 sequelize가 알아서 지정해줌)
// define 안에 모델이름primaryKey로 자동지정함
db.Student.hasMany(db.Classes);
db.Classes.belongsTo(db.Student);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
