import { Elysia } from "elysia";
import BaseHtml from "@/src/components/layout/BaseHtml";
import Header from "@/src/components/Header.tsx";
import Hero from "@/src/components/Hero.tsx";
import Footer from "@/src/components/Footer.tsx";
import About from "@/src/components/About.tsx";
import Events from "@/src/components/Events.tsx";
import Projects from "@/src/components/Projects.tsx";
import Contact from "@/src/components/Contact.tsx";
import Join from "@/src/components/Join.tsx";
import Blog from "@/src/components/Blog.tsx";


const pageRouter = new Elysia()
	.get("/", () => (
		<BaseHtml path="Home">
			<Header currentPath="home" />
			<Hero />
			<Footer />
		</BaseHtml>
	))
	.get("/about", () => (
		<BaseHtml path="About">
			<Header currentPath="about" />
			<About />
			<Footer />
		</BaseHtml>
	))
	.get("/events", () => (
		<BaseHtml path="Events">
			<Header currentPath="events" />
			<Events />
			<Footer />
		</BaseHtml>
	))
    .get("/projects", () => (
        <BaseHtml path="Projects">
			<Header currentPath="projects" />
			<Projects />
			<Footer />
		</BaseHtml>
    ))
    .get("/contact", () => (
        <BaseHtml path="Contact">
            <Header currentPath="contact" />
            <Contact />
            <Footer />
        </BaseHtml>
    ))
	.get("/join", () => (
		<BaseHtml path="Join">
			<Header currentPath="join" />
			<Join />
			<Footer />
		</BaseHtml>
	))
	.get("/blog", () => (
		<BaseHtml path="Blog">
			<Header currentPath="blog" />
			<Blog />
			<Footer />
		</BaseHtml>
	));

export default pageRouter;
