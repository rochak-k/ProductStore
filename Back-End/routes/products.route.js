import express from 'express';
import { createproduct, deleteProduct, getproducts, updateProduct } from '../controllers/product.cotroller.js';
const router = express.Router();
router.get('/', getproducts
)
router.post('/',createproduct)
router.delete('/:id',deleteProduct)
router.put('/:id',updateProduct )
export default router;