import type { Config } from "drizzle-kit";

export default {
  schema: "./src/database/schema",
  driver: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  verbose: true,
  strict: true,
} satisfies Config;