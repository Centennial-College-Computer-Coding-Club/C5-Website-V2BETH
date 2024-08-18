document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const content = document.getElementById('extendedFooter');

    footer.onmouseenter = () => {
        content.style.maxHeight = `${content.scrollHeight}px`;
        content.style.opacity = '1';
    };

    footer.onmouseleave = () => {
        content.style.maxHeight = '0px';
        content.style.opacity = '0';
    };
});