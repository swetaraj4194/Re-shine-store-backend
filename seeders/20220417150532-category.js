"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      { category: "Electronics", createdAt: new Date(), updatedAt: new Date() },
      { category: "Jewelery", createdAt: new Date(), updatedAt: new Date() },
      {
        category: "Men's Clothing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Women's Clothing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        category: "Furniture",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Home Decoration",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Plants",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
