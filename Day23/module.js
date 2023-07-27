// // 하나의 모듈 파일에 여러 개 만들기

const a = "a 변수";
const b = "b 변수";
// const c = 20;

// // 외부에서 사용하려면 아래처럼 내보내야함
// module.exports = { a, b };

// 하나의 모듈 파일에 하나 만들기
function connect() {
  return a + b;
}
module.exports = connect;
