'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
   
    static associate(models) {
      // Tag tem muitas Tasks através da tabela intermediária TaskTag
      Tag.belongsToMany(models.Task, { through: 'TaskTag' });
    }
  }
  Tag.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
  });

  
  return Tag;
};