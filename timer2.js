// SETUP CODE
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const beep = () => {
  process.stdout.write('\x07');
  process.stdout.write('BEEP\n');
};

process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if(key === 'b') {
    beep();
  }

  if((Number(key) >= 1)) {
    if(key >= 1 && key <= 10) {
      process.stdout.write(`setting timer for ${key} seconds...\n`);
      setTimeout(() => {
        beep()
      }, key * 1000);
    }
  }
});