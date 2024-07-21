const assert = require('assert');
const { spawn } = require('child_process');

describe('1-stdin.js', () => {
  it('should output the correct responses', (done) => {
    const child = spawn('node', ['1-stdin.js']);

    let output = '';

    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.stdin.write('Alice\n');

    child.stdin.end();

    child.on('exit', (code) => {
      assert.strictEqual(output.includes('Welcome to Holberton School, what is your name?\n'), true);
      assert.strictEqual(output.includes('Your name is: Alice\n'), true);
      assert.strictEqual(output.includes('This important software is now closing\n'), true);
      done();
    });
  });
});
