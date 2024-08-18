export default function Join() {
    return (
        <section class="flex flex-col items-center justify-center w-full max-w-4xl my-auto pb-5">
            <h1 class="font-['Montserrat-Bold'] text-4xl md:text-6xl mb-8 flex justify-center">
                Join C<sup class="text-[#d4df38] text-3xl">5</sup>
            </h1>
            <p class="text-xl mb-8 text-center">
                Become a part of our vibrant community of tech enthusiasts and innovators!
            </p>
            <form class="w-full max-w-lg flex flex-col gap-4" hx-post="/api/join" hx-swap="outerHTML">
                <div class="mb-4">
                    <label for="first_name" class="block text-sm font-bold mb-2">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        required
                        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        placeholder="Your First Name"
                    />
                </div>
                <div class="mb-4">
                    <label for="last_name" class="block text-sm font-bold mb-2">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        required
                        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        placeholder="Your Last Name"
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
                <div class="flex items-center justify-between self-end">
                    <button
                        type="submit"
                        class="button-accent text-lg"
                    >
                        Join Now
                    </button>
                </div>
            </form>
        </section>
    );
}