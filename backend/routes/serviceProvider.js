import express from 'express';
import { getServiceProvider,getServiceProviderbyID } from '../controllers/serviceProvider.js';
const router = express.Router();

router.get('/', getServiceProvider);
router.get('/:id', getServiceProviderbyID);

export default router;