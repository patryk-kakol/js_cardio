// REVERSE A STRING
// ex. reverseString('hello') == 'olleh'

// 1
function reverseString(str) {
  const strArray = str.split('');
  strArray.reverse();

  return strArray.join('');
}


const output = reverseString('pink_duck');
console.log(output);
