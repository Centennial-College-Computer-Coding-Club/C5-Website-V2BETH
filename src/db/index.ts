import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
  url: Bun.env.DATABASE_URL || "http://127.0.0.1:8080",
  authToken: Bun.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { logger: true });
