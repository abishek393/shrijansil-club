// app.js
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './src/config/db.js';
import eventRouter from "./src/routes/eventRoutes.js";
import syncDatabase from './src/services/relation_table.js';
import playerRouter from "./src/routes/playerRoutes.js";
import categoryRouter from "./src/routes/categoryRoutes.js"

import cors from "cors";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: 'http://localhost:3001', 
  methods: 'GET,POST',             
  allowedHeaders: ['Content-Type', 'Authorization'], // Only allow these headers
  credentials: true                 // Enable cookies over CORS
};

app.use(express.json());
app.use(cors());

app.use("/api/event", eventRouter);
app.use("/api/player", playerRouter);
app.use("/api/category", categoryRouter);


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

