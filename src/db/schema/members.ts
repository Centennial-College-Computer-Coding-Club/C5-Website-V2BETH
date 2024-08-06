import { InferInsertModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const members = sqliteTable("members", {
    id: integer("id", { mode: "number" }).primaryKey({
        autoIncrement: true
    }),
    email: text("email").notNull(),
    first_name: text("first_name").notNull(),
    last_name: text("last_name").notNull(),
    created_at: text("created_at").notNull().default("CURRENT_TIMESTAMP")
});

export type Member = InferInsertModel<typeof members>;