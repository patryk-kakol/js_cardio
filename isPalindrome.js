/* examples:
  isPalindorme('level') === true
  isPalindrome('duck') === false
  basically string reversal with condition check */

// 1 - most obvious choice
function isPalindrom(str) {
  const reversedStr = str.split('')
    .reverse()
    .join('');
  return str === reversedStr;
}

const result = isPalindrom('racecar');
console.log(result);

// this one isn't fun when after practicing string reversal
