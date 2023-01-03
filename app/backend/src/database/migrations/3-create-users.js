'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      phoneNumber: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      mobile: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      departament: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      verificationCode: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      emailChecked: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      cashforceAdm: {
        allowNull: false,
        type: Sequelize.TINYINT,
        defaultValue: 0
      }
    },
    {
      timestamps: false
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users')
  }
}
