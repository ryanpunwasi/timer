let args = process.argv.slice(2);
let time = 0;

args.forEach(e => {
  time = e * 1000;
  setTimeout(() => {
    process.stdout.write('BEEP\n');
  }, time);
});
