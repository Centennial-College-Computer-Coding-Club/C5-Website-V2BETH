export default function Projects() {
    return (
        <section class="flex flex-col items-center justify-center w-full max-w-5xl mx-auto py-16">
            <h1 class="font-['Montserrat-Bold'] text-4xl md:text-6xl text-center mb-8">
                C<sup>5</sup> Projects
            </h1>
            <p class="text-xl mb-8 text-center">
                Explore the innovative projects created by our C<sup>5</sup> community.
            </p>
            <div
                id="projects-list"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
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