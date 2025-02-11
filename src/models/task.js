'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
   
    static associate(models) {
            // Task pertence a um User
            Task.belongsTo(models.User, { foreignKey: 'userId' });

            // Task tem muitas Tags através da tabela intermediária TaskTag
            Task.belongsToMany(models.Tag, { through: 'TaskTag' });
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
        max: 10
      }
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Task',
  });


  
  return Task;
};