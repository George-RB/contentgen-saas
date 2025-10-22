import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Переменные окружения
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Безопасность
app.use(cors());
app.use(morgan('combined')); // Логирование. Сейчас полное.
app.use(express.json());

// Роут для проеверки
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'ContentGen Backend is running!',
    timestamp: new Date().toISOString(),
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
