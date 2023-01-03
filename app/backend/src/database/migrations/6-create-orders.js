'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNfId: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      orderPath: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING
      },
      orderFileName: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING
      },
      orderOriginalName: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING
      },
      emissionDate: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      pdfFile: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      emitedTo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nNf: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      CTE: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      value: {
        defaultValue: null,
        type: Sequelize.STRING
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
      cnpjId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        references: {
          model: 'cnpjs',
          key: 'id'
        }
      },
      userId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      buyerId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        references: {
          model: 'buyers',
          key: 'id'
        }
      },
      providerId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        references: {
          model: 'providers',
          key: 'id'
        }
      },
      orderStatusBuyer: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 0
      },
      orderStatusProvider: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 0
      },
      deliveryReceipt: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      cargoPackingList: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      deliveryCtrc: {
        defaultValue: null,
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('orders')
  }
}
