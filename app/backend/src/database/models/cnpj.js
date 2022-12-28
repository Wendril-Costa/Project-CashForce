module.exports = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define("Cnpj",{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    cnpj: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    companyType: {
      allowNull: false,
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
    }
    },
    {
      timestamps: false,
      tableName: "cnpjs",
    }
  );

  return Cnpj;
};




