// A very clean, subtle scroll animation script
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animation runs only once
            }
        });
    }, observerOptions);

    // Select all elements with the fade-in-up class
    const animatedElements = document.querySelectorAll('.fade-in-up');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
