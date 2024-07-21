const { expect } = require('chai');
const path = require('path');
const child = require('child_process');

const exec = path.join(__dirname, '.', '1-stdin.js');

describe('main', () => {
  it('the user is entering a name', function (done) {
    const proc = child.spawn("node", [exec], { stdio: 'pipe' });

    proc.stdout.once('data', (test) => {
      expect(test.toString()).to.equal('Welcome to Holberton School, what is your name?\n');
      proc.stdin.write('Guillaumeh\n');
      proc.stdout.once('data', (test) => {
        expect(test.toString()).to.equal('Your name is: Guillaumeh\n');
        proc.on('close', () => {
          proc.stdout.once('data', (test) => {
            expect(test.toString()).to.equal('This important software is now closing\n');
            done();
          });
        });
      });
    });
  });
});
