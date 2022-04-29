"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.product);
      user.hasMany(models.bid);
      user.hasMany(models.review);
    }
  }

  user.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },

      email: { type: DataTypes.STRING, allowNull: false },
      phone: DataTypes.STRING,

      password: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
