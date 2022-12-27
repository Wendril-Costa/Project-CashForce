module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order",{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      orderNfId: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      orderNumber: {
        allowNull: false,
        type: DataTypes.STRING
      },
      orderPath: {
        defaultValue: null,
        unique: true,
        type: DataTypes.STRING
      },
      orderFileName: {
        defaultValue: null,
        unique: true,
        type: DataTypes.STRING
      },
      orderOriginalName: {
        defaultValue: null,
        unique: true,
        type: DataTypes.STRING
      },
      emissionDate: {
        defaultValue: null,
        type: DataTypes.STRING
      },
      pdfFile: {
        defaultValue: null,
        type: DataTypes.STRING
      },
      emitedTo: {
        allowNull: false,
        type: DataTypes.STRING
      },
      nNf: {
        defaultValue: null,
        type: DataTypes.STRING
      },
      CTE: {
        defaultValue: null,
        type: DataTypes.STRING
      },
      value: {
        defaultValue: null,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      cnpjId: {
        defaultValue: null,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      userId: {
        defaultValue: null,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      buyerId: {
        defaultValue: null,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      providerId: {
        defaultValue: null,
        type: DataTypes.INTEGER,
        rforeignKey: true,
      },
      orderStatusBuyer: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 0
      },
      orderStatusProvider: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 0
      },
      deliveryReceipt: {
        defaultValue: null,
        type: DataTypes.STRING
      },
      cargoPackingList: {
        defaultValue: null,
        type: DataTypes.STRING
      },
      deliveryCtrc: {
        defaultValue: null,
        type: DataTypes.STRING
      }
      },
      {
        timestamps: false,
        modelName: "orders",
      }
    );
  
    Order.associate = (models) => {
      Order.belongsTo(models.Cnpj, {
        foreignKey: 'cnpjId'
      })
    }

    Order.associate = (models) => {
      Order.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }

    Order.associate = (models) => {
      Order.belongsTo(models.Buyer, {
        foreignKey: 'buyerId'
      })
    }

    Order.associate = (models) => {
      Order.belongsTo(models.Provider, {
        foreignKey: 'providerId'
      })
    }
  
    return Order;
  };
  
  
  