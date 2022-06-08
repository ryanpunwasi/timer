const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if(key === 'b') {
    console.log('beep');
  }
});