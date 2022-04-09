"use strict";
const User = require("../models").user;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "test@1test.com" },
    });
    const user2 = await User.findOne({
      where: { email: "dummy@2dummy.com" },
    });
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "My time at Codaisseur",
          description: "A tell all tale",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "I am a dummy",
          backgroundColor: "#40C076",
          color: "#EDEDED",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
