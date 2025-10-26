-- Таблица пользователей
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  role ENUM('user', 'admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Таблица тарифных планов
CREATE TABLE IF NOT EXISTS plans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price_monthly DECIMAL(10, 2) NOT NULL,
  price_yearly DECIMAL(10, 2),
  features JSON,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Вставляем базовые планы
INSERT INTO plans (name, description, price_monthly, price_yearly, features) VALUES
('Free', 'Базовый бесплатный план', 0.00, 0.00, '["5 генераций в день", "Базовые шаблоны"]'),
('Pro', 'Профессиональный план', 9.99, 99.99, '["Неограниченные генерации", "Все шаблоны", "Приоритетная поддержка"]'),
('Business', 'Для бизнеса', 19.99, 199.99, '["Все функции Pro", "Кастомные шаблоны", "Dedicated support"]');