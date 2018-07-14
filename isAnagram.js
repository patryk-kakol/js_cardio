/* check if pair of given String is build of the same letters and only letters
  ex. isAnagram('looped', 'poodle') === true */

// helper function
function formatStr(str) {
  return str
    .toLowerCase()
    .match(/[a-z]/g)
    .sort()
    .join('');
}
// actuall check
function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

console.log(isAnagram('lo, oped', 'pOOdlE#'));
