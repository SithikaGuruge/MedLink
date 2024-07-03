import express from 'express';
import { getUserbyID } from '../controllers/userDetailsController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
const router = express.Router();


router.get('/getUserbyID', verifyToken,getUserbyID);

export default router;