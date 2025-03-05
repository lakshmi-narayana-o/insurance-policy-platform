import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";

import { initializeDatabase } from './config/databaseInitialization';
import policiesRoutes from './routes/policy.route'

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/policies', policiesRoutes);

initializeDatabase();


export default app;