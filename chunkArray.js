/* Splitting an array into array of smaller arrays
  with length specified as parameter in function call
  ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]] */

// 1
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

console.log(chunkArray1([1, 2, 3, 4, 5, 6, 7], 2));
