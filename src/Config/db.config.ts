import { Pool } from 'pg';
import { config } from 'dotenv';
config();

interface DbConfig {
  getPool(): Pool;
}

export class dbConfig implements DbConfig {
  private pool: Pool;

  public getPool(): Pool {
    this.pool = new Pool({
      connectionString: process.env.DB,
    });
    return this.pool;
  }
}
