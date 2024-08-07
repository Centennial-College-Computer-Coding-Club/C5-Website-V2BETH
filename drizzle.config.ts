import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
import { members } from "@/src/db/schema/members";
import { mockMembers } from "@/src/db/schema/member.mock";
import { events } from "@/src/db/schema/events";
import { projects } from "@/src/db/schema/projects";

dotenv.config();

const schemas: any = [`${members}.ts`, `${mockMembers}.ts`, `${events}.ts`, `${projects}.ts`];

if (!Bun.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

if (!Bun.env.DATABASE_AUTH_TOKEN) {
  throw new Error("DATABASE_AUTH_TOKEN is required");
}

/** @type { import("drizzle-kit").Config } */
export default {
  schema: schemas, // "./src/db/schema/",
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