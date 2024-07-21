const { expect } = require('chai');
const path = require('path');
const child = require('child_process');

const exec = path.join(__dirname, '.', '1-stdin.js');

describe('main', () => {
  it('the user is entering a name', function (done) {
    const proc = child.spawn('node', [exec], { stdio: ['pipe', 'pipe', process.stderr] });

    let output = '';

    proc.stdout.on('data', (data) => {
      output += data.toString();
    });

    proc.stdin.write('Guillaumeh\n');
    proc.stdin.end();

    proc.on('close', () => {
      const lines = output.split('\n');
      expect(lines[0]).to.equal('Welcome to Holberton School, what is your name?');
      expect(lines[1]).to.equal('Your name is: Guillaumeh');
      expect(lines[2]).to.equal('This important software is now closing');
      done();
    });
  });
});
