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
      unique: true,
            validate: {
                len: [3]
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          isEmail: true
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6], 
      },
    },
  },
  
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
    },
    async beforeUpdate(updateUserData) {
        updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
        return updateUserData;
    }
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  
);

module.exports = user;
