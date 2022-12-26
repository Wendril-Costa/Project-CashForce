import { DATE, INTEGER, Model, NOW, STRING, TINYINT } from 'sequelize'
import db from '.'

class User extends Model {
  readonly id!: number
  public name!: string
  public companyType!: string
  public createdAt!: string
  public updatedAt!: string
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER
  },
  name: {
    allowNull: false,
    type: STRING
  },
  email: {
    allowNull: false,
    unique: true,
    type: STRING
  },
  phoneNumber: {
    defaultValue: null,
    type: STRING
  },
  mobile: {
    defaultValue: null,
    type: STRING
  },
  departament: {
    defaultValue: null,
    type: STRING
  },
  verificationCode: {
    defaultValue: null,
    type: STRING
  },
  emailChecked: {
    allowNull: false,
    type: STRING,
    defaultValue: 0
  },
  createdAt: {
    allowNull: false,
    type: DATE,
    defaultValue: NOW
  },
  updatedAt: {
    allowNull: false,
    type: DATE,
    defaultValue: NOW
  },
  cashforceAdm: {
    allowNull: false,
    type: TINYINT,
    defaultValue: 0
  }
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false
})

export default User
