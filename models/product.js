"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      product.belongsTo(models.category);
      product.hasMany(models.image);
      product.hasMany(models.review);
    }
  }
  product.init(
    {
      email: DataTypes.STRING,
      title: DataTypes.STRING,
      mainImage: DataTypes.TEXT,
      description: DataTypes.TEXT,
      ratings: DataTypes.FLOAT,
      price: DataTypes.FLOAT,
      add_cart: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
