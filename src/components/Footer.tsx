export default function Footer() {
    return (
        <footer class="w-full bg-[#252525] text-[#d9d9d9] px-4 group relative">
            <div class="handle w-8 h-3 bg-[#d4df38] rounded-full mx-auto my-2 group-hover:bg-[#d9d9d9] transition-all duration-500 ease-in-out"></div>
            <div id="extendedFooter" class="absolute bottom-full left-0 right-0 bg-[#252525] rounded-t-[20px] overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0">
                <div class="flex justify-between max-w-xl mx-auto p-4">
                    <div class="flex flex-col">
                        <h3 class="font-['Montserrat-Bold'] text-lg mb-4 text-center">Quick Links</h3>
                        <nav class="flex space-x-2 justify-evenly gap-6">
                            <div class="flex flex-col items-center space-y-2">
                                <a href="/" class="hover:text-[#d4df38] transition-colors">Home</a>
                                <a href="/about" class="hover:text-[#d4df38] transition-colors">About</a>
                                <a href="/events" class="hover:text-[#d4df38] transition-colors">Events</a>
                            </div>
                            <div class="flex flex-col items-center space-y-2">
                                <a href="/projects" class="hover:text-[#d4df38] transition-colors">Projects</a>
                                <a href="/contact" class="hover:text-[#d4df38] transition-colors">Contact</a>
                            </div>
                            <div class="flex flex-col items-center space-y-2">
                                <a href="/blog" class="hover:text-[#d4df38] transition-colors">Blog</a>
                                <a href="/join" class="hover:text-[#d4df38] transition-colors">Join Us</a>
                            </div>
                        </nav>
                    </div>
                    <div class="flex flex-col items-center">
                        <h3 class="font-['Montserrat-Bold'] text-lg mb-4">Connect With Us</h3>
                        <div class="flex space-x-4 mb-4">
                            <a href="https://www.instagram.com/ccsai_c5/" class="hover:text-[#d4df38] transition-colors" target="_blank">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="https://x.com/CCSAI_C5" class="hover:text-[#d4df38] transition-colors" target="_blank">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="https://github.com/Centennial-College-Computer-Coding-Club"
                               class="hover:text-[#d4df38] transition-colors" target="_blank">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a href="https://discord.gg/2JRrMF9j46" class="hover:text-[#d4df38] transition-colors" target="_blank">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                                </svg>
                            </a>
                        </div>
                        <a href="mailto:cencolc5@gmail.com"
                           class="font-['Roboto-Regular'] text-sm hover:text-[#d4df38] transition-colors">
                            cencolc5@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div class="p-5 border-t border-[#161616] text-center">
                <p class="font-['Roboto-Regular'] text-sm">
                    © 2024 CCSAI Computer and Coding Club. All rights reserved.
                </p>
            </div>
        </footer>
    )
}