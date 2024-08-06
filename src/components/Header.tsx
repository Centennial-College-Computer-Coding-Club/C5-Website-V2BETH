export default function Header() {
    return (
        <header class="flex h-20 w-full items-center justify-between sticky top-0 mb-16 text-lg bg-[#161616] z-10 px-4">
            <img class="h-16 w-16" src="/public/imgs/C5logo.png" alt="C5 logo"/>
            <nav class="flex absolute left-1/2 -translate-x-1/2 gap-2">
                <a href="/" class="button-secondary">Home</a>
                <a href="/about" class="button-tertiary">About</a>
                <a href="/events" class="button-tertiary">Events</a>
                <a href="/projects" class="button-tertiary">Projects</a>
                <a href="/contact" class="button-tertiary">Contact</a>
            </nav>
            <a href="/signup" class="button-accent">Join Us</a>
        </header>
    )
}