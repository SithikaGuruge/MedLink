import express from "express";
import {
  getUserbyID,
  updateUserbyID,
} from "../controllers/userDetailsController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/getUserbyID", verifyToken, getUserbyID);
router.post("/updateUserbyID", verifyToken, updateUserbyID);

export default router;
