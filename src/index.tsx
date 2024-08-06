import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import pageRouter from "@/src/routers/page.tsx";
import apiRouter from "@/src/routers/api.tsx";

const app = new Elysia()
    .use(html())
    .use(staticPlugin())
    .use(pageRouter)
    .use(apiRouter)
    .listen(3000);

console.log(
    `Bun in the oven @ http://${app.server?.hostname}:${app.server?.port}` // eslint-disable-line
);
