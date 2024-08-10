import { Elysia } from "elysia";
import { db } from "@/src/db";
import { projects, events, members, blogPosts } from "@/src/db/schema.ts";
import {and, gte, lt, eq, desc} from "drizzle-orm";
import { sanitizeHtml } from "@/src/utils/sanitizer";
import { sendDiscordWebhook } from "@/src/utils/discord";


const apiRouter = new Elysia({ prefix: "/api" })
    .get("/projects", async () => {
        const allProjects = await db.select().from(projects).all();

        return (
            <div class="flex gap-8 w-full justify-evenly items-center flex-wrap">
                {allProjects.map(project => (
                    <div class="bg-gradient-to-br flex flex-col justify-between h-56 w-full from-[#212121] to-[#282828] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <div>
                            <h3 class="font-['Montserrat-Bold'] text-2xl mb-3 text-[#d4df38]">{project.name}</h3>
                            <p class="text-gray-300 overflow-hidden">{project.description}</p>
                        </div>
                        <div class="flex justify-between items-center w-full mt-auto">
                            <p class="project-description text-sm text-gray-400 mt-auto">Created: {new Date(project.created_at).toLocaleDateString()}</p>
                            <a href={project.link} target="_blank" class="hover:text-[#d4df38] transition-colors">
                                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        )
    })
    .get("/events", async () => {
        const currentDate = new Date();
        currentDate.setUTCHours(0, 0, 0, 0);
        const upcomingEvents = await db.select()
            .from(events)
            .where(gte(events.eventStart, currentDate.toISOString().split('T')[0]))
            .orderBy(events.eventStart)
            .limit(10)
            .all();

        return (
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {upcomingEvents.map(event => {
                    const startDate = new Date(event.eventStart);
                    const endDate = new Date(event.eventEnd);
                    return (
                        <div class="flex flex-col bg-gradient-to-br from-[#212121] to-[#282828] rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                            <h3 class="font-['Montserrat-Bold'] text-xl mb-2 text-[#d4df38]">{event.title}</h3>
                            <p class="text-sm mb-4 text-gray-300 line-clamp-3">{event.description}</p>
                            <p class="text-xs text-gray-400">
                                <span class="block">Date: {startDate.toLocaleDateString()}</span>
                                <span class="block">Time: {startDate.toLocaleTimeString()} - {endDate.toLocaleTimeString()}</span>
                                <span class="block">Location: {event.location}</span>
                            </p>
                            <button class="mt-4 button-accent text-sm self-end" onclick={`showEventModal(${JSON.stringify({...event, eventStart: event.eventStart, eventEnd: event.eventEnd})})`}>
                                View Details
                            </button>
                        </div>
                    );
                })}
            </div>
        )
    })
    .get("/events/calendar", async ({ query }) => {
        const year = parseInt(query.year as string);
        const month = parseInt(query.month as string);

        const startDate = new Date(Date.UTC(year, month - 1, 1, 12, 0, 0, 0));
        const endDate = new Date(Date.UTC(year, month, 0, 12, 0, 0, 0));

        const monthEvents = await db.select()
            .from(events)
            .where(
                and(
                    gte(events.eventStart, startDate.toISOString().split('T')[0]),
                    lt(events.eventStart, endDate.toISOString().split('T')[0])
                )
            )
            .all();

        const daysInMonth = endDate.getUTCDate();
        const firstDayOfWeek = startDate.getUTCDay();

        const calendarDays = [];
        for (let i = 0; i < firstDayOfWeek; i++) {
            calendarDays.push(<div class="h-24 bg-[#252525] rounded-lg"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayEvents = monthEvents.filter(event => new Date(event.eventStart).getUTCDate() === day);

            calendarDays.push(
                <div class="h-24 bg-gradient-to-br from-[#212121] to-[#282828] rounded-lg p-2 overflow-hidden relative group">
                    <div class="font-['Montserrat-Bold'] text-sm mb-1">{day}</div>
                    {dayEvents.map(event => {
                        return (
                            <div
                                class="text-xs truncate cursor-pointer text-[#d4df38] hover:underline"
                                title={event.title}
                                onclick={`showEventModal(${JSON.stringify({...event, eventStart: event.eventStart, eventEnd: event.eventEnd})})`}
                            >
                                {event.title}
                            </div>
                        )
                    })}
                </div>
            );
        }

        return <>{calendarDays}</>;
    })
    .post("/contact", async ({ body }) => {
        // TODO: Send email to club email address
        console.log("Received contact form submission:", body);

        return (
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Thank you!</strong>
                <span class="block sm:inline"> Your message has been sent successfully.</span>
            </div>
        );
    })
    .post("/join", async ({ body }: { body: { first_name: string; last_name: string; email: string } }) => {
        try {
            const newMember = await db.insert(members).values({
                first_name: body.first_name,
                last_name: body.last_name,
                email: body.email,
            }).returning().get();

            return (
                // TODO: Link to Discord server
                <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">Welcome aboard!</strong>
                    <span class="block sm:inline"> You've successfully joined C<sup>5</sup>. We'll be in touch soon!</span>
                </div>
            );
        } catch (error) {
            console.error("Error adding new member:", error);
            return (
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong class="font-bold">Oops!</strong>
                    <span class="block sm:inline"> There was an error processing your request. Please try again later.</span>
                </div>
            );
        }
    })
    .get("/blog/posts", async () => {
        const posts = await db.select().from(blogPosts).where(eq(blogPosts.status, "approved")).orderBy(desc(blogPosts.created_at)).all();

        return (
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {posts.map((post, index) => (
                    <div
                        class="bg-gradient-to-br from-[#212121] to-[#282828] rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                        onclick={`openBlogModal(${index})`}
                    >
                        <h3 class="font-['Montserrat-Bold'] text-xl mb-2 text-[#d4df38]">{post.title}</h3>
                        <p class="text-sm mb-4 text-gray-300 line-clamp-3">{post.content}</p>
                        <p class="text-xs text-gray-400">
                            Author: {post.author}<br />
                            Posted: {new Date(post.created_at).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        )
    })

    .post("/blog/submit", async ({ body } : { body : { title : string, author : string, content : string } }) => {
        const sanitizedContent = sanitizeHtml(body.content);
        const newPost = await db.insert(blogPosts).values({
            title: body.title,
            author: body.author,
            content: sanitizedContent,
        }).returning().get();

        await sendDiscordWebhook({
            content: `New blog post submitted!`,
            embeds: [{
                title: newPost.title,
                description: newPost.content.substring(0, 100) + "...",
                author: {
                    name: newPost.author
                },
                footer: {
                    text: `Post ID: ${newPost.id}`
                }
            }]
        });

        return (
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Thank you!</strong>
                <span class="block sm:inline"> Your blog post has been submitted for review.</span>
            </div>
        );
    })

export default apiRouter;