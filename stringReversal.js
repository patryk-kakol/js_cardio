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

/* 4 - es6 approach
  lesson here: according to eslint I should use "const char" in the loop, not "let char"
  at first moment I thought it won't work, because variable char changes, but ofc linter was right:
  it is not being reassgined, but redeclared.
  Afterall linter also said the loops should be avoided in favor of array iterations... */
function reverseString4(str) {
  let reversedStr = '';
  for (const char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

/* 5 - so array iteration naturally comes next,
  note: It would feel natural to get rid of parentheses and curly braces:
    str.split('').forEach(char => reversedStr = char + reversedStr);
  but then linter barks at me about arrow func returning assignment, what supposedly is wrong,
  so let leave it like this for now */
function reverseString5(str) {
  let reversedStr = '';
  str.split('').forEach((char) => {
    reversedStr = char + reversedStr;
  });
  return reversedStr;
}

// 6 - high order fuctions, useful linter told me to make it arrow, that's my favorite
function reverseString6(str) {
  return str.split('')
    .reduce((reversedStr, char) => char + reversedStr, '');
}

console.log(reverseString1('pink_duck'));
console.log(reverseString2('pink_duck'));
console.log(reverseString3('pink_duck'));
console.log(reverseString4('pink_duck'));
console.log(reverseString5('pink_duck'));
console.log(reverseString6('pink_duck'));
