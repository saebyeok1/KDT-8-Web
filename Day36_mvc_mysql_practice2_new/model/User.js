// const mysql = require("mysql");
import mysql from "mysql2/promise";

// mysql연결
// createConnection: 단일연결, 매번 연결이 필요할 때마다 새로운 연결 생성
// 연결 수 가 많아지면 성능에 영향이 생김(project가 작을 떄 사용)
// createPool: 여러 연결, 여러개의 연결을 미리 생성하고 관리
// 요청이 들어올 때마다 생성한 연결을 할당, 동시처리가 가능
const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
  port: 3306,
});

// 2개의 매개변수를 받음
// req.body를 data로 받고
export const post_signup = async (data) => {
  try {
    // 준비된 query
    const query = `INSERT INTO user (userid, pw, name) VALUES(?,?,?) `;
    const rows = await conn.query(query, [data.userid, data.pw, data.name]);
    return rows;
  } catch (error) {
    console.log(err);
  }
};

export const post_signin = async (data) => {
  try {
    const query = "SELECT * FROM user WHERE userid = ? AND pw = ?";
    // query문은 배열안의 배열로 처리가 되기 때문에 배열로 처리해주는게 좋음
    // 첫 번째 배열만 필요하기 때문에 배열구조할당으로 첫번째 배열만 나오게 됨
    const [rows] = await conn.query(query, [data.userid, data.pw]);
    return rows;
  } catch (error) {
    console.log(err);
  }
};

export const post_profile = async (data) => {
  try {
    const query = "SELECT * FROM user WHERE userid=?";
    const [rows] = await conn.query(query, [data.profile]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const edit_profile = async (data) => {
  try {
    const query = "UPDATE user SET userid=?, pw=?, name=? WHERE id=?";
    const [rows] = await conn.query(query, [
      data.userid,
      data.pw,
      data.name,
      data.id,
    ]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const delete_profile = async (id) => {
  try {
    const query = "DELETE from user WHERE id=?";
    const [rows] = await conn.query(query, [id]);
  } catch (error) {
    console.log(error);
  }
};
