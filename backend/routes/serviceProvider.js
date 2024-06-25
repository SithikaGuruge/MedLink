import express from 'express';
import { getServiceProvider } from '../controllers/serviceProvider.js';
const router = express.Router();

router.get('/', getServiceProvider);

export default router;