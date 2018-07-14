/* Splitting an array into array of smaller arrays
  with length specified as parameter in function call
  ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]] */

// 1
function chunkArray1(arr, len) {
  const chunked = [[]];

  arr.forEach((element) => {
    if (chunked[chunked.length - 1].length < len) {
      chunked[chunked.length - 1].push(element);
    } else {
      chunked.push([element]);
    }
  });
  return chunked;
}

console.log(chunkArray1([1, 2, 3, 4, 5, 6, 7], 2));
