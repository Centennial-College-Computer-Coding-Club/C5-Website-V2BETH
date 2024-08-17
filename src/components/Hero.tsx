export default function Hero() {
    return (
        <section class="flex flex-col my-auto items-center justify-center w-full bg-gradient-to-br text-white">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                <h1 class="font-['Montserrat-Bold'] text-5xl md:text-7xl mb-6 animate-fade-in-down flex justify-center">
                    Welcome to C<sup class="text-[#d4df38] text-3xl">5</sup>
                </h1>
                <p class="font-['Roboto-Regular'] text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
                    Centennial College's Computer and Coding Club: Where Innovation Meets Community
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up">
                    <a href="/join" id="joinBtn" class="button-accent text-lg px-8 py-3 rounded-full transform transition duration-300 hover:scale-105">
                        Join Us
                    </a>
                    <a href="/events" class="button text-lg px-8 py-3 rounded-full transform transition duration-300 hover:scale-105">
                        Upcoming Events
                    </a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-fade-in-up">
                    {[
                        { icon: "💡", title: "Learn", description: "Expand your coding skills through workshops and projects" },
                        { icon: "🤝", title: "Connect", description: "Network with like-minded peers and industry professionals" },
                        { icon: "🚀", title: "Innovate", description: "Turn your ideas into reality with our supportive community" }
                    ].map(item => (
                        <div class="bg-[#1e1e1e] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                            <div class="text-4xl mb-4">{item.icon}</div>
                            <h3 class="font-['Montserrat-Bold'] text-xl mb-2 text-[#d4df38]">{item.title}</h3>
                            <p class="text-gray-300">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}