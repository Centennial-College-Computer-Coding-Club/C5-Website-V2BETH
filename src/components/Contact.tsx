export default function Contact() {
    return (
        <section class="flex flex-col items-center justify-center w-full max-w-4xl my-auto pb-5">
            <h1 class="font-['Montserrat-Bold'] text-4xl md:text-6xl mb-8 flex justify-center">
                Contact C<sup class="text-[#d4df38] text-3xl">5</sup>
            </h1>
            <p class="text-xl mb-8 text-center">
                Have questions or want to get involved? Reach out to us!
            </p>
            <form class="w-full max-w-lg" hx-post="/api/contact" hx-swap="outerHTML">
                <div class="mb-4">
                    <label for="name" class="block text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        placeholder="Your Name"
                    />
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        placeholder="your@email.com"
                    />
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-sm font-bold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        rows="4"
                        placeholder="Your message here..."
                    ></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        type="submit"
                        class="button-accent text-lg"
                    >
                        Send to dev/null
                    </button>
                </div>
            </form>
        </section>
    );
}