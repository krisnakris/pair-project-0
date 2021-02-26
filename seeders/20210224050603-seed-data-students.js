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
        name : "Krisna",
        user_name : "Krisna",
        email: "krisna@mail.com",
        password : "123456",
        phone_number : "08098999",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name : "Haidar",
        user_name : "Haidar",
        email: "Haidar@mail.com",
        password : "123456",
        phone_number : "08098999",
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ]

    return queryInterface.bulkInsert('Students', data, {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Students', null, {});
  }
};
