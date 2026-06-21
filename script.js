// This file initializes the cool 3D hover effects.
document.addEventListener("DOMContentLoaded", () => {
    // Check if device is touch screen to disable tilt for better mobile experience
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (!isTouchDevice) {
        VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
            scale: 1.01
        });
    }

    // Add a simple entrance animation for the bento cards
    const cards = document.querySelectorAll('.bento-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });
});
