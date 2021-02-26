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
      message: "Besok ada pertandingan",
      group_id : 2,
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      message: "Besok libur",
      group_id : 1,
      createdAt : new Date(),
      updatedAt : new Date(),
    }
   ]
   return queryInterface.bulkInsert('Messages', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Messages', null, {});

  }
};
