// visitor에 대한 테이블 정의
const Visitor = function (sequelize, DataTypes) {
  // sequelize는 models/index.js에 있는 sequelize > 접속정보
  // DataTypes는 mdels/index.js에 있는 Sequelize > require로 가져온 sequelize 모듈
  const model = sequelize.define(
    "visitor",
    {
      // allowNull은 true가 not null 허용
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    }
    // {
    //   tableName: "visitor",
    //   freezeTableName: true,
    //   timestamps: false,
    // }
  );
  return model;
};

module.exports = Visitor;
