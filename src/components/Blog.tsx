export default function Blog() {
    return (
        <section class="flex flex-col items-center justify-center w-full max-w-4xl my-auto pb-5">
            <h1 class="font-['Montserrat-Bold'] text-4xl md:text-6xl text-center mb-8">
                C<sup>5</sup> Blog
            </h1>
            <p class="text-xl mb-8 text-center">
                Share your thoughts and experiences with the C<sup>5</sup> community!
            </p>
            <div
                id="blog-posts"
                hx-get="/api/blog/posts"
                hx-trigger="load"
                hx-indicator="#blog-loading"
            >
            </div>
            <div id="blog-loading" class="htmx-indicator">
                Loading blog posts...
            </div>

            {/* TODO: Extract this form into a separate component and put in the member only dashboard*/}

            <h2 class="font-['Montserrat-Bold'] text-2xl mt-16 mb-4 text-center">Submit a New Blog Post</h2>
            <form class="w-full max-w-lg bg-[#252525] p-6 rounded-[20px]" hx-post="/api/blog/submit" hx-swap="outerHTML">
                <div class="mb-4">
                    <label for="title" class="block text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        placeholder="Your Post Title"
                    />
                </div>
                <div class="mb-4">
                    <label for="author" class="block text-sm font-bold mb-2">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        required
                        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        placeholder="Your Name"
                    />
                </div>
                <div class="mb-4">
                    <label for="content" class="block text-sm font-bold mb-2">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        required
                        class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        rows="6"
                        placeholder="Write your blog post here..."
                    ></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        type="submit"
                        class="button-accent text-lg"
                    >
                        Submit Post
                    </button>
                </div>
            </form>
        </section>
    );
}