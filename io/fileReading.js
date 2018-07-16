const fs = require('fs');

// synchronous way
// const content = fs.readFileSync('sample.txt', 'utf8');
// console.log(content);

// asynchronus way

let content = 'initial value';
fs.readFile('sample.txt', 'utf8', (error, result) => {
  content = result;
  console.log(content);
});
console.log(content);
