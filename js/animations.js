
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const targetSelectors = [
        '.thq-card', '.modern-play-card', '.thq-heading-1', '.thq-heading-2', 
        '.thq-button-filled', '[class^="our-values-thq-list-item"]', '.come-and-join-the-fun-video', '.modern-badge'
    ];

    document.querySelectorAll(targetSelectors.join(', ')).forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });
});
