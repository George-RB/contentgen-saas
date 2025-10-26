import pool from '../config/database';

export interface User {
  id?: number;
  email: string;
  password_hash: string;
  first_name?: string;
  last_name?: string;
  role?: 'user' | 'admin';
  created_at?: Date;
  updated_at?: Date;
}

export class UserModel {
  // Создание нового пользователя
  static async create(
    user: Omit<User, 'id' | 'created_at' | 'updated_at'>
  ): Promise<number> {
    const [result] = await pool.execute(
      'INSERT INTO users (email, password_hash, first_name, last_name, role) VALUES (?, ?, ?, ?, ?)',
      [
        user.email,
        user.password_hash,
        user.first_name,
        user.last_name,
        user.role || 'user',
      ]
    );

    return (result as any).insertId;
  }

  // Поиск пользователя по email
  static async findByEmail(email: string): Promise<User | null> {
    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [
      email,
    ]);

    const users = rows as User[];
    return users.length > 0 ? users[0] : null;
  }

  // Поиск пользователя по ID
  static async findById(id: number): Promise<User | null> {
    const [rows] = await pool.execute(
      'SELECT id, email, first_name, last_name, role, created_at FROM users WHERE id = ?',
      [id]
    );

    const users = rows as User[];
    return users.length > 0 ? users[0] : null;
  }
}
