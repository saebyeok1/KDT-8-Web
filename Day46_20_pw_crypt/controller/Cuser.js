const models = require("../models");

exports.index = (req, res) => {
  res.render("index");
};

exports.join = (req, res) => {
  res.render("join");
};

exports.login = (req, res) => {
  res.render("login");
};

exports.post_join = () => {
  // const { id, pw } = req.body;
  conn.query(`INSERT INTO user (userid,pw) values (?,?)`, (err, rows) => {});
};
