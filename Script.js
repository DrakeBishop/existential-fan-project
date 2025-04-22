// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {

    // Get the elements
    const fanZone = document.getElementById('fan-zone');
    const rainZone = document.getElementById('rain-zone');
    const clockZone = document.getElementById('clock-zone');

    // Fan Zone - Add interaction
    fanZone.addEventListener('click', function() {
        fanZone.innerHTML = '<h2>Fan Zone</h2><p>The fan is still spinning. How thrilling.</p>';
    });

    // Rain Zone - Add sound effect
    rainZone.addEventListener('click', function() {
        const rainSound = new Audio('rain.mp3');  // Ensure you have this file
        rainSound.play();
        rainZone.innerHTML = '<h2>Rain Zone</h2><p>Enjoy the calming sound of rain... or not.</p>';
    });

    // Clock Zone - Add interaction
    clockZone.addEventListener('click', function() {
        clockZone.innerHTML = '<h2>Clock Zone</h2><p>The time is passing... slowly.</p>';
    });

});
const rainButton = document.getElementById("rain-button");
const rainSound = document.getElementById("rain-sound");
const rainResponse = document.getElementById("rain-response");

let isPlaying = false;

rainButton.addEventListener("click", () => {
    if (!isPlaying) {
        rainSound.play();
        rainResponse.textContent = "Did that fix your sadness? No? Worth a try.";
        rainButton.textContent = "Stop Rain";
    } else {
        rainSound.pause();
        rainSound.currentTime = 0;
        rainResponse.textContent = "Click if you're feeling dramatic.";
        rainButton.textContent = "Summon Rain";
    }
    isPlaying = !isPlaying;
});
function updateClock() {
    const clockElement = document.getElementById("clock");
    const judgement = document.getElementById("clock-judgement");

    const now = new Date();
    const time = now.toLocaleTimeString();
    clockElement.textContent = time;

    const messages = [
        "Time’s passing. You’re still here. Fascinating.",
        "Another second gone. Still no Nobel Prize.",
        "Tick tock, sweetie. You said you'd be productive today.",
        "Existence: still loading.",
        "The fan’s spinning faster than your life is moving.",
        "Time is fake. But this clock isn’t."
    ];

    const index = now.getSeconds() % messages.length;
    judgement.textContent = messages[index];
}

setInterval(updateClock, 1000);
updateClock();
