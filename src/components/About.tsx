export default function About() {
    return (
        <section class="flex flex-col items-center justify-center w-full max-w-6xl my-auto px-4">
            <h1 class="font-['Montserrat-Bold'] text-5xl md:text-7xl text-center mb-12 text-gradient">
                About C<sup class="text-gradient">5</sup>
            </h1>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full">
                <div class="bg-gradient-to-br from-[#212121] to-[#282828] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <h2 class="font-['Montserrat-Bold'] text-2xl mb-4 text-[#d4df38]">Our Mission</h2>
                    <p class="text-gray-300">
                        We aim to foster a collaborative environment where students can explore, learn, and grow their skills in computer science and coding. Our club is dedicated to bridging the gap between classroom learning and real-world application.
                    </p>
                </div>
                <div class="bg-gradient-to-br from-[#212121] to-[#282828] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <h2 class="font-['Montserrat-Bold'] text-2xl mb-4 text-[#d4df38]">What We Do</h2>
                    <ul class="list-disc list-inside text-gray-300">
                        <li>Organize coding workshops and hackathons</li>
                        <li>Host tech talks and industry speaker events</li>
                        <li>Collaborate on exciting projects</li>
                        <li>Provide mentorship and networking opportunities</li>
                    </ul>
                </div>
            </div>

            <div class="w-full mb-16">
                <h2 class="font-['Montserrat-Bold'] text-3xl mb-6 text-center text-[#d4df38]">Our Values</h2>
                <div class="flex flex-wrap justify-center gap-4">
                    {[
                        { icon: "🚀", title: "Innovation", description: "Pushing the boundaries of technology" },
                        { icon: "🤝", title: "Collaboration", description: "Working together to achieve more" },
                        { icon: "🧠", title: "Continuous Learning", description: "Always striving to improve our skills" },
                        { icon: "🌍", title: "Community Impact", description: "Using our skills to make a difference" },
                    ].map(value => (
                        <div class="bg-gradient-to-br from-[#212121] to-[#282828] p-4 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 w-48 text-center transform transition-all duration-300 hover:scale-105 flex flex-col items-center justify-between">
                            <div class="text-4xl mb-2">{value.icon}</div>
                            <h3 class="font-['Montserrat-Bold'] text-lg mb-2 text-[#d4df38]">{value.title}</h3>
                            <p class="text-sm text-gray-300">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div class="w-full mb-16">
                <h2 class="font-['Montserrat-Bold'] text-3xl mb-6 text-center text-[#d4df38]">Meet Our Team</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { name: "Chris", role: "President", image: "/public/imgs/default-user.png" },
                        { name: "Fawzia", role: "Vice President", image: "/public/imgs/default-user.png" },
                        { name: "Vacant", role: "Admin Officer", image: "/public/imgs/default-user.png" },
                    ].map(member => (
                        <div class="bg-gradient-to-br from-[#212121] to-[#282828] p-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 text-center transform transition-all duration-300 hover:scale-105">
                            <img src={member.image} alt={member.name} class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                            <h3 class="font-['Montserrat-Bold'] text-lg mb-1 text-[#d4df38]">{member.name}</h3>
                            <p class="text-sm text-gray-300">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div class="text-center mb-8">
                <h2 class="font-['Montserrat-Bold'] text-3xl mb-4 text-[#d4df38]">Join Us!</h2>
                <p class="text-xl mb-6 text-gray-300">
                    Whether you're a coding novice or a seasoned developer, there's a place for you in C<sup>5</sup>. Let's learn, code, and innovate together!
                </p>
                <a href="/join" class="button-accent text-lg">Become a Member</a>
            </div>
        </section>
    )
}