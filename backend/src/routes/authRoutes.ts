import { Router } from 'express';
import { register, login, getProfile } from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// Публичные роуты
router.post('/register', register);
router.post('/login', login);

// Защищенные роуты (требуют токен)
router.get('/profile', authenticateToken, getProfile);

export default router;
