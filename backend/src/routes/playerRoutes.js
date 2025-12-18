import express from "express";
import { registerPlayer } from "../controllers/playerController.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();

router.post("/register",   upload.fields([
    { name: 'authenticateDocument', maxCount: 2 },
    { name: 'paymentVoucher', maxCount: 2 }
  ]), registerPlayer);


export default router;