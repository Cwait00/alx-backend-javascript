// Import the readline module
const readline = require('readline');

// Create an interface to read input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for their name
console.log('Welcome to Holberton School, what is your name?');

// Read the user's input
rl.question('', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);
  
  // Close the readline interface
  rl.close();
});

// When the readline interface is closed, display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
});
