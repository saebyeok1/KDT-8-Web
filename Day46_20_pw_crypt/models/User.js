const { DataTypes } = require("sequelize");

const UserModel = (sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    pw: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(15),
    },
    usdrd: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  });
  return User;
};
module.exports = UserModel;
