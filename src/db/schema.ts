import { InferInsertModel } from "drizzle-orm";
import { integer, sqliteTable, text, blob } from "drizzle-orm/sqlite-core";


export const members = sqliteTable("members", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    role: text("role").$type<"staff" | "member" | "process">().default("process"),
    email: text("email").notNull(),
    first_name: text("first_name").notNull(),
    last_name: text("last_name").notNull(),
    created_at: text("created_at").notNull().default("CURRENT_TIMESTAMP")
});

export type Member = InferInsertModel<typeof members>;

export const mockMembers = sqliteTable("mock_members", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    role: text("role").$type<"staff" | "member" | "process">().default("process"),
    email: text("email").notNull(),
    first_name: text("first_name").notNull(),
    last_name: text("last_name").notNull(),
    created_at: text("created_at").notNull().default("CURRENT_TIMESTAMP")
});

export type MockMember = InferInsertModel<typeof mockMembers>;

export const events = sqliteTable("events", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    description: text("description").notNull(),
    date: text("date").notNull(),
    eventType: text("event_type").notNull(),
    eventStart: text("event_start").notNull(),
    eventEnd: text("event_end").notNull(),
    location: text("location").notNull(),
    organizer: text("organizer").notNull(),
    imageUrl: text("image_url"),
    createdAt: text("created_at").notNull().default("CURRENT_TIMESTAMP")
});

export type Event = InferInsertModel<typeof events>;

export const projects = sqliteTable("projects", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    description: text("description").notNull(),
    link: text("link").notNull(),
    created_at: text("created_at").notNull().default("CURRENT_TIMESTAMP"),
});

export type Project = InferInsertModel<typeof projects>;

export const blogPosts = sqliteTable("blog_posts", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    img: blob("img").$type<Buffer>(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    author: text("author").notNull(),
    status: text("status").$type<"pending" | "approved" | "rejected">().default("pending"),
    created_at: text("created_at").notNull().default("CURRENT_TIMESTAMP")
});

export type BlogPost = InferInsertModel<typeof blogPosts>;
