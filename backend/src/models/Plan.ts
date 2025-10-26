import pool from '../config/database';

export interface Plan {
  id?: number;
  name: string;
  description?: string;
  price_monthly: number;
  price_yearly?: number;
  features?: string[];
  is_active?: boolean;
  created_at?: Date;
}

export class PlanModel {
  // Получить все активные планы
  static async findAllActive(): Promise<Plan[]> {
    const [rows] = await pool.execute(
      'SELECT * FROM plans WHERE is_active = true ORDER BY price_monthly ASC'
    );

    return rows as Plan[];
  }

  // Найти план по ID
  static async findById(id: number): Promise<Plan | null> {
    const [rows] = await pool.execute(
      'SELECT * FROM plans WHERE id = ? AND is_active = true',
      [id]
    );

    const plans = rows as Plan[];
    return plans.length > 0 ? plans[0] : null;
  }
}
