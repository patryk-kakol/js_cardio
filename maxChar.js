/* Finds the most frequent char in given string, e.g.:
  maxChar('Hakuna Matata') === 'a' */

// 1 - not very elegant solution
function maxChar1(str) {
  const sorted = str.split('').sort();
  let counter = 1;
  let maxCount = 1;
  let maxIndex = 0;

  for (let i = 0; i < sorted.length; i += 1) {
    if (sorted[i - 1] === sorted[i]) {
      counter += 1;
    } else {
      counter = 1;
    }
    if (counter > maxCount) {
      maxCount = counter;
      maxIndex = i;
    }
  }
  return sorted[maxIndex];
}


/* 2 - previous one with ternary operator abuse
- it's quite inappropriate especially in second expression
  + unary operators to piss liner off :D */
function maxChar2(str) {
  const sorted = str.split('').sort();
  let counter = 1;
  let maxCount = 1;
  let maxIndex = 0;

  for (let i = 0; i < sorted.length; i++) {
    sorted[i - 1] === sorted[i] ? counter++ : counter = 1;
    counter > maxCount ? (maxCount = counter, maxIndex = i) : 0;
  }
  return sorted[maxIndex];
}

/* 3 - counting all chars and then pick most frequent,
  quite confusing arror usage with ternary operator;
  basicaly this and previous solution(2) look really bad in eslint eyes */
function maxChar3(str) {
  const charMap = {};
  let maxCount = 0;
  let maxChar = '';
  str
    .split('')
    .forEach(char => (charMap[char] ? charMap[char]++ : charMap[char] = 1));

  for (const char in charMap) {
    charMap[char] > maxCount ? (maxCount++, maxChar = char) : 0;
  }
  return maxChar;
}

/* 4 - solution no3, but done the way eslint like it, just for comparison
  another note: for..in are not liked; is array iterations always better? */
function maxChar4(str) {
  const charMap = {};
  let maxCount = 0;
  let maxChar = '';

  str
    .split('')
    .forEach((char) => {
      if (charMap[char]) charMap[char] += 1;
      else charMap[char] = 1;
    });

  Object
    .keys(charMap)
    .forEach((key) => {
      if (charMap[key] > maxCount) {
        maxCount += 1;
        maxChar = key;
      }
    });
  return maxChar;
}

console.log(maxChar1('Hakuna Matata'));
console.log(maxChar2('Hakuna Matata'));
console.log(maxChar3('Hakuna Matata'));
console.log(maxChar4('Hakuna Matata'));
