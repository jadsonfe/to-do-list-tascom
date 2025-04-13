'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
   
    static associate(models) {
      // Tag tem muitas Tasks através da tabela intermediária TaskTag
      Tag.belongsToMany(models.Task, { through: 'TaskTag', as: 'tasks', foreignKey: 'TagId' });
    }
  }
  Tag.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false}
  }, {
    sequelize,
    modelName: 'Tag',
  });

  
  return Tag;
};