const { DataTypes } = require("sequelize");

const ClassModel = (sequelize) => {
  const Classes = sequelize.define("Classes", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    room: {
      type: DataTypes.STRING(7),
    },
    code: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
    teacher_name: {
      type: DataTypes.STRING(10),
    },
  });
  return Classes;
};

module.exports = ClassModel;