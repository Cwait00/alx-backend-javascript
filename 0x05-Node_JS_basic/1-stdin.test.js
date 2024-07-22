const { exec } = require('child_process');
const { expect } = require('chai');

describe('1-stdin.js', () => {
  it('should handle user input and display correct output', (done) => {
    const child = exec('node 1-stdin.js');

    let output = '';
    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
      expect(code).to.equal(0);
      expect(output).to.include('Welcome to Holberton School, what is your name?');
      expect(output).to.include('Your name is: John Doe');
      expect(output).to.include('This important software is now closing');
      done();
    });

    // Simulate user input after a small delay to ensure prompt is received
    setTimeout(() => {
      child.stdin.write('John Doe\n');
      child.stdin.end();
    }, 100);
  });
});
