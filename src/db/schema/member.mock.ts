import { InferInsertModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Mock Members Schema for Testing Turso Database
export const mockMembers = sqliteTable("mock_members", {
    id: integer("id", { mode: "number" }).primaryKey({
        autoIncrement: true
    }),
    role: text("role").$type<"staff" | "member" | "process">().default("process"),
    email: text("email").notNull(),
    first_name: text("first_name").notNull(),
    last_name: text("last_name").notNull(),
    created_at: text("created_at").notNull().default("CURRENT_TIMESTAMP")
});

export type MockMember = InferInsertModel<typeof mockMembers>;