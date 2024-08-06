export default function Header({ currentPath }: { currentPath: string }) {
    return (
        <header class="flex h-20 w-full items-center justify-between sticky top-0 mb-16 text-lg bg-[#161616] z-10 px-4">
            <a href="/">
                <img class="h-16 w-16" src="/public/imgs/C5logo.png" alt="C5 logo"/>
            </a>
            <nav class="flex absolute left-1/2 -translate-x-1/2 gap-2">
                <a href="/" class={currentPath === "home" ? "button-secondary" : "button-tertiary"}>Home</a>
                <a href="/about" class={currentPath === "about" ? "button-secondary" : "button-tertiary"}>About</a>
                <a href="/events" class={currentPath === "events" ? "button-secondary" : "button-tertiary"}>Events</a>
                <a href="/projects" class={currentPath === "projects" ? "button-secondary" : "button-tertiary"}>Projects</a>
                <a href="/contact" class={currentPath === "contact" ? "button-secondary" : "button-tertiary"}>Contact</a>
            </nav>
            <a href="/join" class={currentPath === "join" ? "button-secondary" : "button-accent"}>Join Us</a>
        </header>
    )
}