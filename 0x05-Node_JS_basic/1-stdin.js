process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdin.pause(); // Pause the input stream after receiving data
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});

process.stdin.resume(); // Resume the input stream to allow data input
