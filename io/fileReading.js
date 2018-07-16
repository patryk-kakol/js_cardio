const fs = require('fs');

const content = fs.readFileSync('sample.txt', 'utf8');

console.log(content);
