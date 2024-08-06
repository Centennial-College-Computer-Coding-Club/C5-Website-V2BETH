import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

if (!Bun.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

if (!Bun.env.DATABASE_AUTH_TOKEN) {
  throw new Error("DATABASE_AUTH_TOKEN is required");
}

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/db/schema",
  out: "./.drizzle",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: Bun.env.DATABASE_URL!,
    authToken: Bun.env.DATABASE_AUTH_TOKEN,
  },
  verbose: true,
  strict: true,
} satisfies Config;