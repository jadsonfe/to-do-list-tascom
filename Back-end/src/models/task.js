'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
   
    static associate(models) {
            // Task pertence a um User
            Task.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
            // Task pertence a um Workspace
            Task.belongsTo(models.Workspace, { foreignKey: 'workspaceId', as: 'workspace' });

            // Task tem muitas Tags através da tabela intermediária TaskTag
            Task.belongsToMany(models.Tag, { through: 'TaskTag', as: 'tags', foreignKey: 'TaskId' });
    }
  }
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Em andamento', 'Finalizado'),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    description: {
      type: DataTypes.TEXT
    },
    workspaceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Workspaces',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });


  
  return Task;
};