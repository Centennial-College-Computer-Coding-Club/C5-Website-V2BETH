import { Elysia } from 'elysia';
import BaseHtml from "../components/layout/BaseHtml"
import Header from "@/src/components/Header.tsx";
import Hero from "@/src/components/Hero.tsx";
import Footer from "@/src/components/Footer.tsx";


const pageRouter = new Elysia()
    .get('/', () =>
        <BaseHtml>
            <Header />
            <Hero />
            <Footer />
        </BaseHtml>
    );


export default pageRouter;