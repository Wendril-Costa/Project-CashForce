'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tax: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tariff: {
        allowNull: false,
        type: Sequelize.STRING
      },
      adValorem: {
        allowNull: false,
        type: Sequelize.STRING
      },
      float: {
        allowNull: false,
        type: Sequelize.STRING
      },
      iof: {
        allowNull: false,
        type: Sequelize.STRING
      },
      expiredIn: {
        allowNull: false,
        type: Sequelize.DATE
      },
      paymentStatusSponsor: {
        type: Sequelize.TINYINT,
        defaultValue: 0
      },
      paymentStatusProvider: {
        type: Sequelize.TINYINT,
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
      orderId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        references: {
          model: 'orders',
          key: 'id'
        }
      },
      sponsorId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        references: {
          model: 'sponsors',
          key: 'id'
        }
      }
    },
    {
      timestamps: false
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('offers')
  }
}
