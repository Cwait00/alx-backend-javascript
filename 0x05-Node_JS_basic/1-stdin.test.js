const { spawn } = require('child_process');
const { assert } = require('chai');

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
      assert.strictEqual(code, 0);

      const lines = output.split('\n');
      assert.strictEqual(lines[0], 'Welcome to Holberton School, what is your name?');
      assert.strictEqual(lines[1], 'Your name is: Alice');
      assert.strictEqual(lines[2], 'This important software is now closing');

      done();
    });
  });

  it('should handle input via echo', (done) => {
    const child = spawn('sh', ['-c', 'echo "John" | node 1-stdin.js']);

    let output = '';

    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.on('exit', (code) => {
      assert.strictEqual(code, 0);

      const lines = output.split('\n');
      assert.strictEqual(lines[0], 'Welcome to Holberton School, what is your name?');
      assert.strictEqual(lines[1], 'Your name is: John');
      assert.strictEqual(lines[2], 'This important software is now closing');

      done();
    });
  });
});
