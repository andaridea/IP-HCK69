'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Orders", "isPaid", Sequelize.BOOLEAN, {
      salary: {
        type: Sequelize.BOOLEAN
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Orders", "isPaid")
  }
};
