/* Shift letter to next in ASCII table, in case of Z go back to A
  ex. letterShift('zebra crossing') === 'afcsb dspttjoh' */

/* 1 - linter didn't liked 'else' here,
  arrow + ternary is considered confusing, so this is best i got,
  works, and 0 linter errors */
function letterShift(str) {
  return str
    .toLowerCase()
    .replace(/[a-z]/g, (char) => {
      if (char !== 'z') return String.fromCharCode(char.charCodeAt() + 1);
      return 'a';
    });
}

console.log(letterShift('zebra crossing'));
