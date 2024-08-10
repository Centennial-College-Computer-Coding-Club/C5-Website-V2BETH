function showEventModal(event) {
    const modal = document.getElementById('event-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const details = document.getElementById('modal-details');

    title.textContent = event.title;
    description.textContent = event.description;

    const startDate = new Date(event.eventStart);
    const endDate = new Date(event.eventEnd);

    details.innerHTML = `
        <p>Date: ${startDate.toLocaleDateString()}</p>
        <p>Time: ${startDate.toLocaleTimeString()} - ${endDate.toLocaleTimeString()}</p>
        <p>Location: ${event.location}</p>
        <p>Organizer: ${event.organizer}</p>
    `;

    modal.classList.remove('hidden');
}

function closeEventModal() {
    const modal = document.getElementById('event-modal');
    modal.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const eventsList = document.getElementById('events-list');
    let currentIndex = 0;

    function showNextEvent() {
        const events = eventsList.children;
        events[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex + 1) % events.length;
        events[currentIndex].classList.remove('hidden');
    }

    function showPrevEvent() {
        const events = eventsList.children;
        events[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex - 1 + events.length) % events.length;
        events[currentIndex].classList.remove('hidden');
    }

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('button-accent', 'mt-4', 'mr-2');
    nextButton.addEventListener('click', showNextEvent);

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.classList.add('button-accent', 'mt-4');
    prevButton.addEventListener('click', showPrevEvent);

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('flex', 'items-center', 'justify-center', 'gap-8', 'mb-4');
    buttonDiv.appendChild(prevButton);
    buttonDiv.appendChild(nextButton);

    eventsList.parentNode.insertBefore(buttonDiv, eventsList.nextSibling);
});