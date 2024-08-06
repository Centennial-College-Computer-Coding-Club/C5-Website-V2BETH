import { InferInsertModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";


export const projects = sqliteTable("projects", {
    id: integer("id", { mode: "number" }).primaryKey({
        autoIncrement: true
    }),
    name: text("name").notNull(),
    description: text("description").notNull(),
    created_at: text("created_at").notNull().default("CURRENT_TIMESTAMP")
});

export type Project = InferInsertModel<typeof projects>;