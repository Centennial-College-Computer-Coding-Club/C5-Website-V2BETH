export default function Events() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    return (
        <section class="flex flex-col items-center justify-center w-full max-w-6xl my-auto pb-5">
            <h1 class="font-['Montserrat-Bold'] text-4xl md:text-6xl text-center mb-8">
                C<sup>5</sup> Events
            </h1>
            <p class="text-xl mb-8 text-center">
                Stay updated with our upcoming events and activities.
            </p>

            <div class="w-full mb-8">
                <h2 class="font-['Montserrat-Bold'] text-2xl mb-4 text-center">{currentMonth} {currentYear}</h2>
                <div class="grid grid-cols-7 gap-2 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div class="text-center font-['Montserrat-Bold']">{day}</div>
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
                    Loading calendar...
                </div>
            </div>

            <h2 class="font-['Montserrat-Bold'] text-2xl mb-4 text-center">Upcoming Events</h2>
            <div
                id="events-list"
                class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
                hx-get="/api/events"
                hx-trigger="load"
                hx-indicator="#events-loading"
            >
            </div>
            <div id="events-loading" class="htmx-indicator">
                Loading events...
            </div>
        </section>
    )
}