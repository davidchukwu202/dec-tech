import express from 'express';

import {
  createConsult,
  getAllConsults,
} from '../controllers/consultController.js';

const router = express.Router();

router.get('/', getAllConsults);
router.post('/', createConsult);

export default router;
