import express from 'express';

import {
  addProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} from '../../controllers/productContoller.js';

const router = express.Router();
router.get('/', getProducts);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

export default router;
