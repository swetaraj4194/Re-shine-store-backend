"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      image.belongsTo(models.product);
    }
  }
  image.init(
    {
      image: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "image",
    }
  );
  return image;
};
