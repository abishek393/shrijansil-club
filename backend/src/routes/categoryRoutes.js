import express from "express";

import { createCategory, updateCategory, } from "../controllers/categoryController.js";


const router = express.Router();
router.post("/register", createCategory);
router.patch("/update/:id", updateCategory);


export default router;