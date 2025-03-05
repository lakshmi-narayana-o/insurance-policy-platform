import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  },
  pool: {
    max: 5, 
    min: 0, 
    acquire: 30000, 
    idle: 10000 
  },
  logging: process.env.NODE_ENV === 'development' ? console.log : false
});

export default sequelize;
