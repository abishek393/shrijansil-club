import express from "express";
import { createEvent, updateEvent, getAllEvent } from "../controllers/eventController.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();

router.post("/register", upload.single("image"), createEvent);
router.patch("/update/:id", updateEvent);
router.get("/getAll", getAllEvent);

export default router