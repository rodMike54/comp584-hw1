/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");
console.log("Nice to meet you! My name is Michael Rodriguez");

// Find the button on the webpage
const button = document.getElementById('confettiBtn');

// Listen for a click on the button
//super fun lol
button.addEventListener('click', () => {
    // This shoots random confetti from the center of the screen
    confetti({
        particleCount: 150, // How many pieces of confetti
        spread: 80,         // How wide they scatter
        origin: { y: 0.6 }  // Slightly below the middle of the screen
    });
});
