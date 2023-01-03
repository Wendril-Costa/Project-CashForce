'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderportions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nDup: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dVenc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      vDup: {
        allowNull: false,
        type: Sequelize.STRING
      },
      availableToMarket: {
        allowNull: false,
        type: Sequelize.TINYINT,
        defaultValue: 1
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
      }
    },
    {
      timestamps: false
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('orderportions')
  }
}
