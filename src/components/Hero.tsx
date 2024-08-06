export default function Hero() {
    return (
        <section
            class="flex flex-col items-center justify-center w-full h-[70vh] bg-[#161616] text-[#d9d9d9] rounded-[20px] p-8 mb-16">
            <h1 class="font-['Montserrat-Bold'] text-4xl md:text-6xl text-center mb-6">
                Welcome to C<sup>5</sup>
            </h1>
            <p class="font-['Roboto-Regular'] text-xl md:text-2xl text-center mb-8 max-w-2xl">
                Centennial College's Computer and Coding Club: Where Innovation Meets Community
            </p>
            <div class="flex gap-4">
                <a href="/signup" class="button-accent text-lg">Join Us</a>
                <a href="/events" class="button-tertiary text-lg">Upcoming Events</a>
            </div>
        </section>
    )
}