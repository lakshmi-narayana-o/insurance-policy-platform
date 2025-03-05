import Policy from "../model/policy.model";
import sequelize from "./db";

export const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    await sequelize.sync({
      alter: process.env.NODE_ENV === 'development'
    });
    console.log('All models were synchronized successfully.');


    const policyCount = await Policy.count();
    if (policyCount === 0) {
      await Policy.bulkCreate([
        {
          "name": "Secure Future Term Life",
          "type": "Term Life",
          "premium": 5000,
          "coverage": 1000000
        },
        {
          "name": "Health Shield Plan",
          "type": "Health",
          "premium": 3000,
          "coverage": 500000
        },
        {
          "name": "Car Protect Plan",
          "type": "Vehicle",
          "premium": 2000,
          "coverage": 300000
        },
        {
          "name": "Family Care Plus",
          "type": "Health",
          "premium": 4500,
          "coverage": 700000
        },
        {
          "name": "Smart Child Plan",
          "type": "Health",
          "premium": 2500,
          "coverage": 400000
        },
        {
          "name": "Golden Years Pension",
          "type": "Term Life",
          "premium": 6000,
          "coverage": 1200000
        },
        {
          "name": "Two-Wheeler Safety Cover",
          "type": "Vehicle",
          "premium": 1500,
          "coverage": 200000
        },
        {
          "name": "Business Shield Policy",
          "type": "Term Life",
          "premium": 8000,
          "coverage": 2500000
        },
        {
          "name": "Personal Accident Cover",
          "type": "Term Life",
          "premium": 1800,
          "coverage": 600000
        }
      ]);
      console.log('Initial policies seeded.');
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
