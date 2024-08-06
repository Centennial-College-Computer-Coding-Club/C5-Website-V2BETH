import { Elysia } from "elysia";
import { db } from "@/src/db";
import { projects } from "@/src/db/schema/projects";
import { events } from "@/src/db/schema/events";
import { and, gte, lt } from "drizzle-orm";


const apiRouter = new Elysia({ prefix: "/api" })
    .get("/projects", async () => {
        const allProjects = await db.select().from(projects).all();

        return (
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {allProjects.map(project => (
                    <div class="bg-[#252525] p-6 rounded-lg shadow-lg">
                        <h3 class="font-['Montserrat-Bold'] text-xl mb-2">{project.name}</h3>
                        <p class="text-sm mb-4">{project.description}</p>
                        <p class="text-xs text-gray-500">Created: {new Date(project.created_at).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        )
    })
    .get("/events", async () => {
        const currentDate = new Date().toISOString();
        const upcomingEvents = await db.select()
            .from(events)
            .where(gte(events.event_start, currentDate))
            .orderBy(events.event_start)
            .limit(10)
            .all();

        return (
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {upcomingEvents.map(event => (
                    <div class="bg-[#252525] p-6 rounded-lg shadow-lg">
                        <h3 class="font-['Montserrat-Bold'] text-xl mb-2">{event.title}</h3>
                        <p class="text-sm mb-4">{event.description}</p>
                        <p class="text-xs text-gray-500">
                            Date: {new Date(event.event_start).toLocaleDateString()}<br />
                            Time: {new Date(event.event_start).toLocaleTimeString()} - {new Date(event.event_end).toLocaleTimeString()}
                        </p>
                    </div>
                ))}
            </div>
        )
    })
    .get("/events/calendar", async ({ query }) => {
        const year = parseInt(query.year as string);
        const month = parseInt(query.month as string);

        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);

        const monthEvents = await db.select()
            .from(events)
            .where(
                and(
                    gte(events.event_start, startDate.toISOString()),
                    lt(events.event_start, endDate.toISOString())
                )
            )
            .all();

        const daysInMonth = endDate.getDate();
        const firstDayOfWeek = startDate.getDay();

        const calendarDays = [];
        for (let i = 0; i < firstDayOfWeek; i++) {
            calendarDays.push(<div class="h-24 bg-[#252525] rounded-lg"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month - 1, day);
            const dayEvents = monthEvents.filter(event => new Date(event.event_start).getDate() === day);

            calendarDays.push(
                <div class="h-24 bg-[#252525] rounded-lg p-2 overflow-hidden">
                    <div class="font-['Montserrat-Bold'] text-sm mb-1">{day}</div>
                    {dayEvents.map(event => (
                        <div class="text-xs truncate" title={event.title}>{event.title}</div>
                    ))}
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
    });

export default apiRouter;