import express from "express";
import { makePaymentForChanneling } from "../controllers/payment.js";

const router = express.Router();

router.post(
  "/channeling",
  express.raw({ type: "application/json" }),
  makePaymentForChanneling
);

export default router;
