import express from 'express';
import cors from 'cors';
import auth from '../middlewares/AuthMiddleware.js';
import { register, authenticate } from '../controllers/AuthController.js';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/register', register);
router.post('/authenticate', authenticate);

router.use(auth);

export default router;
