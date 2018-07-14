/* find longest word in given string
  ex. longestWord('Hello there, my name is Patryk') === 'Patryk' */

// 1
function longestWord1(str) {
  let maxCount = 0;
  let result = '';

  str
    .match(/[A-Za-z0-9]+/g)
    .forEach((word) => {
      if (word.length > maxCount) {
        maxCount = word.length;
        result = word;
      }
    });
  return result;
}

console.log(longestWord1('Hello there, my name is Patryk'));
