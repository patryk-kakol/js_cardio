/* example:
  capitalizeStr('hakuna MATATA fOrevEr') === 'Hakuna Matata Forever' */

// 1 - traditional for loop
function captializeStr1(str) {
  const strArray = str.toLowerCase().split(' ');

  for (let i = 0; i < strArray.length; i += 1) {
    strArray[i] = strArray[i].substring(0, 1).toUpperCase()
    + strArray[i].substring(1);
  }
  return strArray.join(' ');
}

// 2 - map() + arrow function
function captializeStr2(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

// 3 - use of regular expression
function captializeStr3(str) {
  return str
    .toLowerCase()
    .replace(/\b[a-z]/gi, char => char.toUpperCase());
}

console.log(captializeStr1('hakuna MATATA fOrevEr'));
console.log(captializeStr2('hakuna MATATA fOrevEr'));
console.log(captializeStr3('hakuna MATATA fOrevEr'));
