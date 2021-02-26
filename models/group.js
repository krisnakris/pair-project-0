'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.belongsToMany(models.Student, {
        through: models.StudentGroup,
        foreignKey : 'group_id'
      });
      Group.hasMany(models.Message, {
        foreignKey: 'group_id',
        sourceKey: 'id'
      });
    }

    getGroupName() {
      return `Group ` + this.name_group;
    }
  };
  Group.init({
    name_group: DataTypes.STRING,
    email_group: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};