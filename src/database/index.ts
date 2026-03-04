import { Pool } from "pg";
import { env } from "../config";

const pool = new Pool({
  connectionString: env.databaseUrl,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const connectDB = async () => {
  try {
    await pool.connect();
    console.log("✅ Supabase PostgreSQL Connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

export default pool;
