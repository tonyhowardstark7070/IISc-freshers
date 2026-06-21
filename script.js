document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typing-text");
    const textToType = "Establishing secure connection to Freshers Comms...";
    let index = 0;

    function typeWriter() {
        if (index < textToType.length) {
            textElement.innerHTML += textToType.charAt(index);
            index++;
            // Randomize typing speed for a realistic terminal feel
            let speed = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
            setTimeout(typeWriter, speed);
        } else {
            // Blink cursor effect after typing finishes
            textElement.innerHTML += '<span style="animation: blink 1s infinite;">_</span>';
        }
    }

    // Start typing effect after a small delay
    setTimeout(typeWriter, 500);
});

// Adding blink animation dynamically
const style = document.createElement('style');
style.innerHTML = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
document.head.appendChild(style);
