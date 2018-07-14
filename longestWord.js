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

/* 2 - with use of sort and filter insted of array iteration,
  additionally if theres more then one word of max length
  it will return an array containing all longest words */
function longestWord2(str) {
  const sorted = str.match(/[A-Za-z0-9]+/g)
    .sort((a, b) => b.length - a.length);

  const longestArr = sorted
    .filter(word => word.length === sorted[0].length);

  return longestArr.length === 1 ? longestArr[0] : longestArr;
}

console.log(longestWord1('Hello there, my name is Patryk'));
console.log(longestWord2('Helloo there, my name is Patryk'));
