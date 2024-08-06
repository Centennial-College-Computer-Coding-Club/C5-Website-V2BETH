import { Elysia } from "elysia";
import BaseHtml from "@/src/components/layout/BaseHtml";
import Header from "@/src/components/Header.tsx";
import Hero from "@/src/components/Hero.tsx";
import Footer from "@/src/components/Footer.tsx";
import About from "@/src/components/About.tsx";


const pageRouter = new Elysia()
	.get("/", () => (
		<BaseHtml>
			<Header />
			<Hero />
			<Footer />
		</BaseHtml>
	))
	.get("/about", () => (
		<BaseHtml>
			<Header />
			<About />
			<Footer />
		</BaseHtml>
	))
	.get("/events", () => (
		<BaseHtml>
			<Header />
			<h1>Events</h1>
			<Footer />
		</BaseHtml>
	))
    .get("/projects", () => (
        <BaseHtml>
			<Header />
			<h1>Projects</h1>
			<Footer />
		</BaseHtml>
    ))
    .get("/contact", () => (
        <BaseHtml>
            <Header />
            <h1>Contact</h1>
            <Footer />
        </BaseHtml>
    ))
	.get("/join", () => (
		<BaseHtml>
			<Header />
			<h1>Join Us</h1>
			<Footer />
		</BaseHtml>
	));

export default pageRouter;
