'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('Em andamento', 'Finalizado'),
        allowNull: false
      },
      priority: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1, // Garante que seja no mínimo 1
          max: 10 // Garante que seja no máximo 10
        }
      },
      description: {
        type: Sequelize.TEXT
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
    await queryInterface.addColumn('Tasks', 'workspaceId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Workspaces',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    await queryInterface.addColumn('Tasks', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
    await queryInterface.removeColumn('Tasks', 'workspaceId');
    await queryInterface.removeColumn('Tasks', 'userId');
  }
};
