export default function About() {
    return (
        <section class="flex flex-col items-center justify-center w-full max-w-4xl mx-auto my-auto">
            <h1 class="font-['Montserrat-Bold'] text-4xl md:text-6xl text-center mb-8">
                About C<sup>5</sup>
            </h1>
            <p class="text-xl mb-8 text-center">
                The CCSAI Computer and Coding Club (C<sup>5</sup>) is a vibrant community of tech enthusiasts, coders, and innovators.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 class="font-['Montserrat-Bold'] text-2xl mb-4">Our Mission</h2>
                    <p>
                        We aim to foster a collaborative environment where students can explore, learn, and grow their skills in computer science and coding. Our club is dedicated to bridging the gap between classroom learning and real-world application.
                    </p>
                </div>
                <div>
                    <h2 class="font-['Montserrat-Bold'] text-2xl mb-4">What We Do</h2>
                    <ul class="list-disc list-inside">
                        <li>Organize coding workshops and hackathons</li>
                        <li>Host tech talks and industry speaker events</li>
                        <li>Collaborate on exciting projects</li>
                        <li>Provide mentorship and networking opportunities</li>
                    </ul>
                </div>
            </div>
            <div class="mt-16">
                <h2 class="font-['Montserrat-Bold'] text-2xl mb-4 text-center">Join Us!</h2>
                <p class="text-center mb-8">
                    Whether you're a coding novice or a seasoned developer, there's a place for you in C<sup>5</sup>. Let's learn, code, and innovate together!
                </p>
                <div class="flex justify-center">
                    <a href="/join" class="button-accent text-lg">Become a Member</a>
                </div>
            </div>
        </section>
    )
}