import { DATE, INTEGER, Model, NOW, STRING } from 'sequelize'
import db from '.'

class Cnpj extends Model {
  readonly id!: number
  public cnpj!: string
  public companyType!: string
  public createdAt!: string
  public updatedAt!: string
}

Cnpj.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER
  },
  cnpj: {
    allowNull: false,
    unique: true,
    type: STRING
  },
  companyType: {
    allowNull: false,
    type: STRING
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
  }
}, {
  sequelize: db,
  modelName: 'cnpjs',
  timestamps: false
})

export default Cnpj
