'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TaskTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TaskId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tasks',  // Nome da tabela referenciada
          key: 'id'        // Chave primária da tabela Tasks
        },
        onDelete: 'CASCADE',  // Se a Task for excluída, as associações serão removidas
      },
      TagId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tags',  // Nome da tabela referenciada
          key: 'id'       // Chave primária da tabela Tags
        },
        onDelete: 'CASCADE',  // Se a Tag for excluída, as associações serão removidas
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
    await queryInterface.dropTable('TaskTags');
  }
};
