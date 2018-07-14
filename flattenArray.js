/* Takes an array of array and flatten to single array
  ex. flattenArr([1, [2, 3], [4, 5, 6], 7]) === [1, 2, 3, 4, 5, 6, 7] */

// 1 - reduce()
function flattenArr1(arr) {
  return arr.reduce((a, b) => a.concat(b), []);
}

// 2 - apply(), eslint does not like it, me neither, but it works
function flattenArr2(arr) {
  return [].concat.apply([], arr);
}

// 3 - spread operator, probably best solution
function flattenArr3(arr) {
  return [].concat(...arr);
}

/* 4 - join, split and map to numbers,
  good if nesting array things go to the next level,
  where previous solutions fail */
function flattenArr4(arr) {
  return arr
    .join()
    .split(',')
    .map(a => +a || a);
}

console.log(flattenArr1([1, [2, 3], [4, [5], 6], 7]));
console.log(flattenArr2([1, [2, 3], [4, [5], 6], 7]));
console.log(flattenArr3([1, [2, 3], [4, [5], 6], 7]));
console.log(flattenArr4([1, [2, 3], [4, [5], 6], 7]));
console.log(flattenArr1([1, [2, 3], [4, 5, 6], 7]));
console.log(flattenArr2([1, [2, 3], [4, 5, 6], 7]));
console.log(flattenArr3([1, [2, 3], [4, 5, 6], 7]));
console.log(flattenArr4([1, [2, 3], [4, 5, 6], 7]));
