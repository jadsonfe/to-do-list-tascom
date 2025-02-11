'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,  // Garantir que o nome não seja nulo
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,  // Garantir que o e-mail não seja nulo
        unique: true,      // Garantir que o e-mail seja único
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,  // Garantir que a senha não seja nula
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
