/* examples:
  isPalindorme('level') = true
  isPalindrome('duck') = false
  basically string reversal with condition check */

// 1 - most obvious choice
function isPalindrom(str) {
  return str === str.split('')
    .reverse()
    .join('');
}

const result = isPalindrom('racecar');
console.log(result);
