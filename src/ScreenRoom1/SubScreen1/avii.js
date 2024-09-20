// Import the 'readline' module for reading input from the command line
const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for the user's name
rl.question("Please enter your name: ", function(name) {
  // Log the response
  console.log("hi!");
  console.log("My name is Anthony Ghonzalvez.");
  console.log("Mai duniya me akela hu");
  
  console.log("test hello");
  
  // Close the readline interface
  rl.close();
});
