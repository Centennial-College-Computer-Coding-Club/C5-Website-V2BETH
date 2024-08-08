export default function Projects() {
    return (
        <section class="flex flex-col items-center justify-center w-full max-w-5xl my-auto pb-5">
            <h1 class="font-['Montserrat-Bold'] text-4xl md:text-6xl text-center mb-8">
                C<sup>5</sup> Projects
            </h1>
            <p class="text-xl mb-8 text-center">
                Explore the innovative projects created by our C<sup>5</sup> community.
            </p>
            <div
                id="projects-list"
                hx-get="/api/projects"
                hx-trigger="load"
                hx-indicator="#projects-loading"
            >
            </div>
            <div id="projects-loading" class="htmx-indicator">
                Loading projects...
            </div>
        </section>
    )
}