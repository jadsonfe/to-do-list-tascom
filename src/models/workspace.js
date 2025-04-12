'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workspace extends Model {

    static associate(models) {
      workspace.hasMany(models.Task, { foreignKey: 'workspaceId', as: 'tasks' });
      workspace.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });



    }
  }
  workspace.init({
    name: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'workspace',
  });
  return workspace;
};
