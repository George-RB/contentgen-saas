import express from 'express';
import cors from 'cors'; // то есть это библиотека а я думал что это встроенная фигня в браузере
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import pool from './config/database';
import authRoutes from './routes/authRoutes';

// Загружаем переменные окружения
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Подключаем роуты
app.use('/api/auth', authRoutes);

// Базовый роут для проверки
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'ContentGen Backend is running!',
    timestamp: new Date().toISOString(),
  });
});

// Проверка подключения к БД
async function testDatabaseConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Database connected successfully');
    connection.release();
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  }
}

// Запуск сервера
app.listen(PORT, async () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  await testDatabaseConnection();
});
