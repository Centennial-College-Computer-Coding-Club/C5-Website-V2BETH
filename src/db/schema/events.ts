import { InferInsertModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const events = sqliteTable("events", {
    id: integer("id", { mode: "number" }).primaryKey({
        autoIncrement: true
    }),
    title: text("title").notNull(),
    description: text("description").notNull(),
    date: text("date").notNull().default("CURRENT_TIMESTAMP"),
    event_type: text("event_type").notNull(),
    event_start: text("event_start").notNull().default("CURRENT_TIMESTAMP"),
    event_end: text("event_end").notNull().default("CURRENT_TIMESTAMP"),
    created_at: text("created_at").notNull().default("CURRENT_TIMESTAMP")
})


export type Event = InferInsertModel<typeof events>;