// REVERSE A STRING
// ex. reverseString('hello') == 'olleh'

// 1 - using reverse() is obvious
function reverseString1(str) {
  return str
    .split('')
    .reverse()
    .join('');
}
// 2 - for loop reversal (decremental)
function reverseString2(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const output = reverseString2('pink_duck');
console.log(output);
