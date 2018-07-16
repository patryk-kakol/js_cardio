const fs = require('fs');

// synchronous way
// const content = fs.readFileSync('sample.txt', 'utf8');
// console.log(content);

// asynchronus way
let content = 'initial value';
fs.readFile('sample.txt', 'utf8', (error, result) => {
  content = result;
  console.log(content);
  content
    .split('\n')
    .filter(line => line.includes('animal'))
    .forEach((line, index) => console.log('animal ' + (index + 1) + ' : ' + line));
});
console.log(content);
