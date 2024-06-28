import express from "express";
import { getUsers } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/auth", (req, res) => {
  res.send("User Authenticated");
});

export default router;
