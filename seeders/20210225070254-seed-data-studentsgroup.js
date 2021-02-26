'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [
      {
        student_id : 1,
        group_id : 1,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        student_id : 2,
        group_id : 2,
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ]
    return queryInterface.bulkInsert('StudentGroups', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('StudentGroups', null, {});
  }
};
