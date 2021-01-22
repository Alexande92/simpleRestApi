'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      fullName: {
        type: Sequelize.STRING,
        field: 'full_name',
        allowNull: false
      },

      dob: {
        type: Sequelize.DATE,
      },

      gender: {
        type: Sequelize.ENUM('men', 'women'),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
