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

// 3 - for loop reversal (incremental)
function reverseString3(str) {
  let reversedStr = '';
  for (let i = 0; i < str.length; i += 1) {
    reversedStr = str[i] + reversedStr;
  }
  return reversedStr;
}


const output = reverseString3('pink_duck');
console.log(output);
