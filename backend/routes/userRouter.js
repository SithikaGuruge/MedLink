import express from "express";
import { login, signup } from "../controllers/authController.js";
import { getUsers } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/signup", signup);
router.post("/login", login);

export default router;
