import express from 'express';
import { recommendBattery } from '../../controllers/batteryController.js';

const router = express.Router();
router.post('/', recommendBattery);

export default router;
