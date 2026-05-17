import express from "express";
import {
  register,
  login,
  me,
  updateProfile,
} from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// these routes are public
router.post("/register", register);
router.post("/login", login);
// but these are only for authenticated so we pass protect
router.get("/me", protect, me);
router.put("/profile", protect, updateProfile);

export default router;
