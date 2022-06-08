let args = process.argv.slice(2);
let time = 0;

args = args.filter((e) => {
  return Number(e) > 0;
});
args.sort((a, b) => a - b);

args.forEach(e => {
  time = e * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
    process.stdout.write('beep\n');
  }, time);
});
