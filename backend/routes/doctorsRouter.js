import express from "express";
import { getDoctors,getDoctorByID } from "../controllers/doctorsController.js";
const router = express.Router();

router.get("/:id", getDoctors);
router.get("/channel/:id", getDoctorByID);

export default router;
