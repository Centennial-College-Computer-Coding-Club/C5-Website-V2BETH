import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import pageRouter from "@/src/routers/page.tsx";

const app = new Elysia()
    .use(html())
    .use(staticPlugin())
    .use(pageRouter)
    .listen(3000);

console.log(
    `Bun in the oven @ http://${app.server?.hostname}:${app.server?.port}` // eslint-disable-line
);
