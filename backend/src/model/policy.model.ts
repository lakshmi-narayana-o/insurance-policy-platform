import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import sequelize from '../config/db'

class Policy extends Model<
  InferAttributes<Policy>, 
  InferCreationAttributes<Policy>
> {
  declare id?: number;
  declare name: string;
  declare type: 'Term Life' | 'Health' | 'Vehicle';
  declare premium: number;
  declare coverage: number;
}

Policy.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('Term Life', 'Health', 'Vehicle'),
    allowNull: false
  },
  premium: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  coverage: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Policy',
  tableName: 'policies',
  timestamps: true
});

export default Policy;