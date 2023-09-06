const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt = require("bcrypt");
const sequelize = require("../config/config");


class user extends Model {
  //
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

user.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8], 
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        try {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        } catch (error) {
          console.error("Error hashing password:", error);
          throw new Error("Error hashing password");
        }
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = user;
