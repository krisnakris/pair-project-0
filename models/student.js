'use strict';
const {
  Model
} = require('sequelize');

const {hashPass} = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsToMany(models.Group, {
        through: models.StudentGroup,
        foreignKey: 'student_id'
      })
    }
  };
  Student.init({
    name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });

  Student.beforeCreate((instance, option) => {
    instance.password = hashPass(instance.password);
  })

  Student.afterCreate((instance, option) => {

  })
  return Student;
};