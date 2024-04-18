'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Orders", "totalPrice", Sequelize.INTEGER, {
      salary: {
        type: Sequelize.INTEGER
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Orders", "totalPrice")
  }
};
