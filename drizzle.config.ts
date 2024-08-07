import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();
const log = console.log;

if (!Bun.env.DATABASE_URL) {
  log(`${chalk.red("Error:")} DATABASE_URL is required.`);
  process.exit(1);
}

if (!Bun.env.DATABASE_AUTH_TOKEN) {
  log(`${chalk.red("Error:")} DATABASE_AUTH_TOKEN is required.`);
  process.exit(1);
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