const signalButton = document.querySelector("#signal-button");
const domeStatus = document.querySelector("#dome-status");

// TODO: Add a click event listener.
// When the learner presses the button, change domeStatus.textContent so the
// next crew can confirm the dome is online or read its next instruction.
const button = document.getElementById("myButton");

const colors = [
    "lightblue",
    "lightgreen",
    "lightpink",
    "lightyellow",
    "lavender",
    "orange"
];

let colorIndex = 0;

button.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[colorIndex];

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
});

