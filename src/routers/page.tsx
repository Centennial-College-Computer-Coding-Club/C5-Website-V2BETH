import { Elysia } from 'elysia';
import BaseHtml from "../components/layout/BaseHtml"
import Header from "@/src/components/Header.tsx";


const pageRouter = new Elysia()
    .get('/', () =>
        <BaseHtml>
            <Header />
            <h1>Home</h1>
        </BaseHtml>
    );


export default pageRouter;