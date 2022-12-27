module.exports = (sequelize, DataTypes) => {
    const Offer = sequelize.define("Offer",{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      tax: {
        allowNull: false,
        type: DataTypes.STRING
      },
      tariff: {
        allowNull: false,
        type: DataTypes.STRING
      },
      adValorem: {
        allowNull: false,
        type: DataTypes.STRING
      },
      float: {
        allowNull: false,
        type: DataTypes.STRING
      },
      iof: {
        allowNull: false,
        type: DataTypes.STRING
      },
      expiredIn: {
        allowNull: false,
        type: DataTypes.DATE
      },
      paymentStatusSponsor: {
        type: DataTypes.TINYINT,
        defaultValue: 0
      },
      paymentStatusProvider: {
        type: DataTypes.TINYINT,
        defaultValue: 0
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
      sponsorId: {
        defaultValue: null,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      
    },
      {
        timestamps: false,
        modelName: "offers",
      }
    );
  
    Offer.associate = (models) => {
        Offer.belongsTo(models.Order, {
        foreignKey: 'orderId',
      })
    }

    Offer.associate = (models) => {
        Offer.belongsTo(models.Sponsor, {
        foreignKey: 'sponsorId',
      })
    }
  
    return Offer;
  };
  
  
  