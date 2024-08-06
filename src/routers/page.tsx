import { Elysia } from 'elysia';
import BaseHtml from "../components/layout/BaseHtml"
import Header from "@/src/components/Header.tsx";
import Hero from "@/src/components/Hero.tsx";


const pageRouter = new Elysia()
    .get('/', () =>
        <BaseHtml>
            <Header />
            <Hero />
        </BaseHtml>
    );


export default pageRouter;