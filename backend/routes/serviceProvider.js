import express from 'express';
import { getServiceProvider } from '../controllers/serviceProvider.js';
import { get } from 'mongoose';
const router = express.Router();

router.get('/', getServiceProvider);

export default router;