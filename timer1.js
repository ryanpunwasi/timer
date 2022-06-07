let args = process.argv.slice(2);
let time = 0;

args = args.filter((e) => {
  return e > 0 && Number.isInteger(Number(e));
});
args.sort((a, b) => a - b);

args.forEach(e => {
  time = e * 1000;
  setTimeout(() => {
    process.stdout.write('BEEP\n');
  }, time);
});
