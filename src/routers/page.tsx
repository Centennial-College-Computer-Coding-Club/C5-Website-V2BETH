import { Elysia } from "elysia";
import BaseHtml from "@/src/components/layout/BaseHtml";
import Header from "@/src/components/Header.tsx";
import Hero from "@/src/components/Hero.tsx";
import Footer from "@/src/components/Footer.tsx";
import About from "@/src/components/About.tsx";
import Events from "@/src/components/Events.tsx";
import Projects from "@/src/components/Projects.tsx";
import Contact from "@/src/Contact.tsx";


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
			<Events />
			<Footer />
		</BaseHtml>
	))
    .get("/projects", () => (
        <BaseHtml>
			<Header />
			<Projects />
			<Footer />
		</BaseHtml>
    ))
    .get("/contact", () => (
        <BaseHtml>
            <Header />
            <Contact />
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
