/* Splitting an array into array of smaller arrays
  with length specified as parameter in function call
  ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]] */

// 1 - keeping in mind that array iterations are light side
function chunkArray1(arr, len) {
  const chunked = [];

  arr.forEach((element) => {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === len) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  });
  return chunked;
}

// 2 - slice the complete chunks
function chunkArray2(arr, len) {
  const chunked = [];
  let i = 0;

  while (i < arr.length) {
    chunked.push(arr.slice(i, i + len));
    i += len;
  }
  return chunked;
}

console.log(chunkArray1([1, 2, 3, 4, 5, 6, 7], 2));
console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7], 2));
