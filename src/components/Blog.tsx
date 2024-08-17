export default function Blog() {
    return (
        <section class="flex flex-col items-center justify-center w-full max-w-6xl my-auto pb-5">
            <h1 class="font-['Montserrat-Bold'] text-5xl md:text-7xl text-center mb-8 flex justify-center">
                C<sup class="text-[#d4df38] text-3xl">5</sup>&nbsp;Blog
            </h1>
            <p class="text-xl mb-12 text-center text-gray-300 max-w-2xl">
                Explore thoughts and experiences from the C<sup>5</sup> community!
            </p>

            <button id="new-post-button" class="button-accent text-lg mb-8">
                Create New Post
            </button>

            <div
                id="blog-posts"
                class="w-full"
                hx-get="/api/blog/posts"
                hx-trigger="load"
                hx-indicator="#blog-loading"
            >
            </div>
            <div id="blog-loading" class="htmx-indicator">
                <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d4df38]"></div>
            </div>

            <dialog id="blog-modal" class="bg-[#252525] text-[#d9d9d9] rounded-lg p-0 w-full max-w-4xl">
                <div id="modal-content" class="p-8">
                </div>
                <div class="flex justify-between items-center bg-[#1a1a1a] p-4">
                    <button id="prev-post" class="button-accent">Previous Post</button>
                    <button id="close-modal" class="button-secondary">Close</button>
                    <button id="next-post" class="button-accent">Next Post</button>
                </div>
            </dialog>

            <dialog id="new-post-modal" class="bg-[#252525] text-[#d9d9d9] rounded-lg p-0 w-full max-w-2xl">
                <h2 class="font-['Montserrat-Bold'] text-2xl mb-4 text-center text-[#d4df38] pt-6">Submit a New Blog Post</h2>
                <form id="new-post-form" class="p-6" hx-post="/api/blog/submit" hx-swap="outerHTML">
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
                        <button
                            type="button"
                            class="button-secondary text-lg"
                            onclick="closeNewPostModal()"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </dialog>
            <script src="/public/scripts/blog.js" defer></script>
        </section>
    );
}