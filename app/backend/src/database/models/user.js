module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User",{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    phoneNumber: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    mobile: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    departament: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    verificationCode: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    emailChecked: {
      allowNull: false,
      type: DataTypes.STRING,
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
    cashforceAdm: {
      allowNull: false,
      type: DataTypes.TINYINT,
      defaultValue: 0
    }
    },
    {
      timestamps: false,
      tableName: 'users'
    }
  );

  return User;
};



