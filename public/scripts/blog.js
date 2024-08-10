let blogPosts = [];
let currentPostIndex = 0;

function openBlogModal(index) {
    currentPostIndex = index;
    const modal = document.getElementById('blog-modal');
    updateModalContent();
    modal.showModal();
}

function updateModalContent() {
    const post = blogPosts[currentPostIndex];
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2 class="font-['Montserrat-Bold'] text-2xl mb-4 text-[#d4df38]">${post.title}</h2>
        <p class="text-sm mb-6">${post.content}</p>
        <p class="text-xs text-gray-400">
            Author: ${post.author}<br />
            Posted: ${new Date(post.created_at).toLocaleDateString()}
        </p>
    `;

    document.getElementById('prev-post').disabled = currentPostIndex === 0;
    document.getElementById('next-post').disabled = currentPostIndex === blogPosts.length - 1;
}

function openNewPostModal() {
    const modal = document.getElementById('new-post-modal');
    modal.showModal();
}

function closeNewPostModal() {
    const modal = document.getElementById('new-post-modal');
    modal.close();
}

document.addEventListener('DOMContentLoaded', () => {
    const blogModal = document.getElementById('blog-modal');
    const newPostModal = document.getElementById('new-post-modal');
    const closeButton = document.getElementById('close-modal');
    const prevButton = document.getElementById('prev-post');
    const nextButton = document.getElementById('next-post');
    const newPostButton = document.getElementById('new-post-button');

    closeButton.addEventListener('click', () => blogModal.close());
    prevButton.addEventListener('click', () => {
        if (currentPostIndex > 0) {
            currentPostIndex--;
            updateModalContent();
        }
    });
    nextButton.addEventListener('click', () => {
        if (currentPostIndex < blogPosts.length - 1) {
            currentPostIndex++;
            updateModalContent();
        }
    });
    newPostButton.addEventListener('click', openNewPostModal);

    htmx.on('#blog-posts', 'htmx:afterSettle', () => {
        blogPosts = Array.from(document.querySelectorAll('#blog-posts > div')).map(el => ({
            title: el.querySelector('h3').textContent,
            content: el.querySelector('p:nth-child(2)').textContent,
            author: el.querySelector('p:last-child').textContent.split('\n')[0].split(': ')[1],
            created_at: el.querySelector('p:last-child')?.textContent.split('\n')[1]?.split(': ')[1]
        }));
    });

    htmx.on('#new-post-form', 'htmx:afterSwap', (event) => {
        if (event.detail.xhr.status === 200) {
            closeNewPostModal();
            htmx.trigger('#blog-posts', 'htmx:load');
        }
    });
});