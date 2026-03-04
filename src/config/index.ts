import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || "3300",
  databaseUrl: process.env.DATABASE_URL as string,
};
