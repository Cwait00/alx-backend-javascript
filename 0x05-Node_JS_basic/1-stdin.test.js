const { exec } = require('child_process');
const { expect } = require('chai');

describe('1-stdin.js', () => {
  it('should handle user input and display correct output', (done) => {
    const child = exec('node 1-stdin.js');

    child.stdout.once('data', (data) => {
      expect(data.toString()).to.include('Welcome to Holberton School, what is your name?');

      // Simulate user input
      child.stdin.write('John Doe\n');
    });

    child.stdout.once('data', (data) => {
      expect(data.toString()).to.include('Your name is: John Doe');
      child.stdin.end(); // End the stdin to finish the test
    });

    child.stdout.once('data', (data) => {
      expect(data.toString()).to.include('This important software is now closing');
      done(); // Finish the test
    });
  });
});
