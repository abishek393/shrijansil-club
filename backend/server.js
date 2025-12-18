// app.js
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './src/config/db.js';
import eventRouter from "./src/routes/eventRoutes.js";
import syncDatabase from './src/services/relation_table.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/event", eventRouter);


const startServer = async () => {
  try {
    await connectDB(); 
    await syncDatabase(); // make sure this 
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();

