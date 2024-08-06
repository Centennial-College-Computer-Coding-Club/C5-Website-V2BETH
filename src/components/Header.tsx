export default function Header() {
    return (
        <header class="flex h-20 w-full items-center justify-between sticky mb-16 text-lg">
            <img class="h-20 w-20" src="public/imgs/C5logo.png" alt="logo"/>
            <nav class="flex absolute -translate-x-1/2 left-1/2 gap-1">
                <a class="button-secondary" href="/">Home</a>
                <a class="button" href="/about">About</a>
                <a class="button" href="/events">Events</a>
                <a class="button" href="/projects">Projects</a>
                <a class="button" href="/contact">Contact</a>
            </nav>
            <a class="button-accent" href="/join">Join Us</a>
        </header>
    )
}