'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaskTag extends Model {
    static associate(models) {
          // TaskTag pertence a uma Task
          TaskTag.belongsTo(models.Task, { foreignKey: 'TaskId' });

          // TaskTag pertence a uma Tag
          TaskTag.belongsTo(models.Tag, { foreignKey: 'TagId' });
    }
  }
  TaskTag.init({
    TaskId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Tasks', key: 'id'}},
    TagId: {type: DataTypes.INTEGER, allowNull: false, references: {model: 'Tags', key: 'id'}},
  }, {
    sequelize,
    modelName: 'TaskTag',
  });
  return TaskTag;
};