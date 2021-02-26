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
   let data = 
   [{
      name_group: "basket",
      email_group : "basket@mail.com",
      createdAt : new Date(),
      updatedAt : new Date(),
   },
   {
    name_group: "badminton",
    email_group : "badminton@mail.com",
    createdAt : new Date(),
    updatedAt : new Date(),
  }
  ]

  return queryInterface.bulkInsert('Groups', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
