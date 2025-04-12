'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workspace extends Model {

    static associate(models) {
      Workspace.hasMany(models.Task, { foreignKey: 'workspaceId', as: 'tasks' });
      Workspace.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });



    }
  }
  Workspace.init({
    name: { type: DataTypes.STRING, allowNull: false },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Workspace',
  });
  return Workspace;
};
