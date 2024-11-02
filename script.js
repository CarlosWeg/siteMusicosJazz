document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".sobre-container, .artista-container, .album-container");
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.classList.add("in-view");
        }
    });
});
