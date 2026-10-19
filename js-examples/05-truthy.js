// In an "if", these count as false ("falsy"):
const falsy = [false, 0, '', null, undefined, NaN];
for (const value of falsy) {
  const shown = String(value) || "''";
  console.log(shown.padEnd(10), '->', value ? 'truthy' : 'falsy');
}

// Everything else counts as true ("truthy"), even these:
console.log('"0"'.padEnd(10), '->', '0' ? 'truthy' : 'falsy');
console.log('[]'.padEnd(10), '->', [] ? 'truthy' : 'falsy');
console.log('{}'.padEnd(10), '->', {} ? 'truthy' : 'falsy');
