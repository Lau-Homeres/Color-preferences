const readline = require('readline');

let colors = ["yellow", "Blue", "green"];
function logColors() {
  console.log("Current colors: " + colors.join(", "));
}

// Initialize readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForColor() {
  rl.question("Enter a new color (or type 'stop' to end): ", (newColor) => {
    if (newColor.toLowerCase() === 'stop') {
      rl.close(); // Stop the readline interface
    } else {
      colors.push(newColor);
      logColors();
      askForColor(); 
    }
  });
}


logColors();
askForColor();
