import { Elysia } from "elysia";
import { db } from "@/src/db";
import { projects } from "@/src/db/schema/projects";

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
    });

export default apiRouter;