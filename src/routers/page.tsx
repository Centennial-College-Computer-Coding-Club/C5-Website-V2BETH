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
			<Header currentPath="home" />
			<Hero />
			<Footer />
		</BaseHtml>
	))
	.get("/about", () => (
		<BaseHtml>
			<Header currentPath="about" />
			<About />
			<Footer />
		</BaseHtml>
	))
	.get("/events", () => (
		<BaseHtml>
			<Header currentPath="events" />
			<Events />
			<Footer />
		</BaseHtml>
	))
    .get("/projects", () => (
        <BaseHtml>
			<Header currentPath="projects" />
			<Projects />
			<Footer />
		</BaseHtml>
    ))
    .get("/contact", () => (
        <BaseHtml>
            <Header currentPath="contact" />
            <Contact />
            <Footer />
        </BaseHtml>
    ))
	.get("/join", () => (
		<BaseHtml>
			<Header currentPath="join" />
			<h1>Join Us</h1>
			<Footer />
		</BaseHtml>
	));

export default pageRouter;
