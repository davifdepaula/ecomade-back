import express from 'express';
import cors from 'cors';
import auth from '../middlewares/AuthMiddleware.js';
import { register, authenticate } from '../controllers/AuthController.js';
import { getProducts, getProduct } from '../controllers/Products.js';

const router = express.Router();
router.use(cors());
router.use(express.json());
router.get('/produtos', getProducts);
router.get('/produtos/:id', getProduct);
router.post('/register', register);
router.post('/authenticate', authenticate);
router.use(auth);

export default router;
