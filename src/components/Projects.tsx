export default function Projects() {
    return (
        <section class="flex flex-col items-center justify-center w-full max-w-6xl mx-auto my-auto px-4">
            <h1 class="font-['Montserrat-Bold'] text-5xl md:text-7xl flex justify-center mb-12">
                C<sup class="text-[#d4df38] text-3xl">5</sup>&nbsp;Projects
            </h1>
            <p class="text-xl mb-12 text-center text-gray-300 max-w-2xl">
                Explore the innovative projects created by our C<sup>5</sup> community, showcasing our passion for technology and collaboration.
            </p>
            <div
                id="projects-list"
                hx-get="/api/projects"
                hx-trigger="load"
                hx-indicator="#projects-loading"
                class="w-full"
            >
            </div>
            <div id="projects-loading" class="htmx-indicator">
                <div class="flex items-center justify-center">
                    <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </div>
        </section>
    )
}