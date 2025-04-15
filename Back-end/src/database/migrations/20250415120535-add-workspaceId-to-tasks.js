'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Tasks', 'workspaceId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Workspaces', // nome da tabela no banco
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Tasks', 'workspaceId');
  }
};
