export default function Events() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    return (
        <section class="flex flex-col items-center justify-center w-full max-w-6xl my-auto pb-5">
            <h1 class="font-['Montserrat-Bold'] text-5xl md:text-7xl text-center mb-8 text-gradient">
                C<sup class="text-gradient">5</sup> Events
            </h1>
            <p class="text-xl mb-12 text-center text-gray-300 max-w-2xl">
                Discover exciting events and activities happening in our C<sup>5</sup> community.
            </p>

            <div class="w-full mb-16">
                <h2 class="font-['Montserrat-Bold'] text-3xl mb-6 text-center text-[#d9d9d9]">{currentMonth} {currentYear}</h2>
                <div class="grid grid-cols-7 gap-2 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div class="text-center font-['Montserrat-Bold'] text-gray-400">{day}</div>
                    ))}
                </div>
                <div
                    id="calendar-grid"
                    class="grid grid-cols-7 gap-2"
                    hx-get="/api/events/calendar"
                    hx-trigger="load"
                    hx-vals={`{"year": ${currentYear}, "month": ${currentDate.getMonth() + 1}}`}
                    hx-indicator="#calendar-loading"
                >
                </div>
                <div id="calendar-loading" class="htmx-indicator text-center mt-4">
                    <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#d4df38]"></div>
                </div>
            </div>

            <h2 class="font-['Montserrat-Bold'] text-3xl mb-6 text-center text-[#d9d9d9]">Upcoming Events</h2>
            <div
                id="events-list"
                class="w-full"
                hx-get="/api/events"
                hx-trigger="load"
                hx-indicator="#events-loading"
            >
            </div>
            <div id="events-loading" class="htmx-indicator text-center mt-4">
                <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#d4df38]"></div>
            </div>

            <dialog id="event-modal" class="bg-[#252525] text-[#d9d9d9] rounded-lg p-0 w-full max-w-2xl">
                <div id="modal-content" class="p-8">
                    <h2 id="modal-title" class="font-['Montserrat-Bold'] text-2xl mb-4 text-[#d4df38]"></h2>
                    <p id="modal-description" class="text-gray-300 mb-4"></p>
                    <div id="modal-details" class="text-sm text-gray-400 mb-4"></div>
                    <button onclick="closeEventModal()" class="button-accent self-end">Close</button>
                </div>
            </dialog>
            <script src="/public/scripts/events.js" defer></script>
        </section>
    )
}