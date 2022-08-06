const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Admin",
          email: "admin@admin.com",
          password_hash: await bcryptjs.hash("admin", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Thalisson",
          email: "thalisson.bandeira@hotmail.com",
          password_hash: await bcryptjs.hash("admin", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz 2",
          email: "luiz2@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz 3",
          email: "luiz3@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
