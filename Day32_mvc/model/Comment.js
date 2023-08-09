// 데이터 베이스 선택하는 부분
exports.commentInfos = () => {
  // sql 문 실행됐다고 가정하고 반환
  return [
    {
      id: 1,
      userid: "helloworld",
      date: "2023-08-05",
      comment: "안녕하세여~^-^",
    },
    {
      id: 2,
      userid: "hitv",
      date: "2023-08-05",
      comment: "하이티비",
    },
    {
      id: 3,
      userid: "cold",
      date: "2023-08-05",
      comment: "추워염",
    },
    {
      id: 4,
      userid: "gohome",
      date: "2023-08-05",
      comment: "집가고 싶어요",
    },
  ];
};
