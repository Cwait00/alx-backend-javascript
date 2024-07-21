const { expect } = require('chai');
const path = require('path');
const child = require('child_process');

const exec = path.join(__dirname, '.', '1-stdin.js');

describe('main', () => {
  it('the user is entering a name', function (done) {
    const proc = child.spawn('node', [exec], { stdio: 'pipe' });

    let output = '';

    proc.stdout.on('data', (data) => {
      output += data.toString();
    });

    proc.stdin.write('Guillaumeh\n');

    proc.stdin.end();

    proc.on('close', (code) => {
      expect(output).to.include('Welcome to Holberton School, what is your name?\n');
      expect(output).to.include('Your name is: Guillaumeh\n');
      expect(output).to.include('This important software is now closing\n');
      done();
    });
  });
});
