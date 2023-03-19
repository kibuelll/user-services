"use strict";

const { hashPass } = require('../helpers/bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
    {
      name : "User 1",
      email: "user1@mail.com",
      password : hashPass("123456"),
      gender : 'Male'
    },
    {
      name : "User 2",
      email: "user2@mail.com",
      password : hashPass("123456"),
      gender: "Female"
    },
    {
      name : "User 3",
      email: "user3@mail.com",
      password : hashPass("123456"),
      gender: "Female"
    }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users',null,{})
  },
};
