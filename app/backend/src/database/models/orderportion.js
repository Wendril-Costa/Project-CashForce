module.exports = (sequelize, DataTypes) => {
    const Orderportion = sequelize.define("Orderportions",{
     nDup: {
        allowNull: false,
        type: DataTypes.STRING
      },
      dVenc: {
        allowNull: false,
        type: DataTypes.STRING
      },
      vDup: {
        allowNull: false,
        type: DataTypes.STRING
      },
      availableToMarket: {
        allowNull: false,
        type: DataTypes.TINYINT,
        defaultValue: 1
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
      orderId: {
        defaultValue: null,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
      {
        timestamps: false,
        modelName: "orderportions",
      }
    );
  
    Orderportion.associate = (models) => {
      Orderportion.belongsTo(models.Order, {
        foreignKey: 'orderId',
      })
    }
  
    return Orderportion;
  };
  
  
  