/* example:
  reverseInt(1234) = 4321 */

function reverseInt(int) {
  const reversedStr = int.toString()
    .split('')
    .reverse()
    .join('');
  return +reversedStr;
  // or more known solution: return parseInt(reversedStr);
}

console.log(reverseInt(2991));
console.log(typeof (reverseInt(2991)));
