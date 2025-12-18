import express from "express";
import { createEvent } from "../controllers/eventController.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();

router.post("/register", upload.single("image"), createEvent);

export default router;