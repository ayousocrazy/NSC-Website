document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-item");

    function updateActiveNav() {
        let scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${id}`
                    );
                });
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);
    window.addEventListener("resize", updateActiveNav);

    // initial call
    updateActiveNav();
});