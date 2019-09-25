// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// One more implementation of arrayChunk using the array.slice() native method
function chunk(array, size) {
  let acc = [];
  let i = 0;
  while (i < array.length) {
    let j = i + size < array.length ? i + size : array.length;
    acc.push(array.slice(i, j));
    i += size;
  }
  return acc;
};

// aditional, slightly more simple implementation of arrayChunked
// function chunk(array, size) {
//   let acc = [];

//   for (let element of array) {
//     let last = acc[acc.length - 1]

//     if (!last || last.length === size) {
//       acc.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return acc;
// };

// Below is my initial solution for the problem.

// function chunk(array, size) {
//   let acc = [];

//   // outer loop will setup chunk creation
//   for (let i = 0; i < array.length; i += size) {
//     let chunk = [];

//     // inner loop will populate the chunk and push it into the acc array
//     for (let j = i; j < i + size; j++) {
//       if (j < array.length) {
//         chunk.push(array[j]);
//       }
//     }
//     acc.push(chunk);
//   }

//   return acc;
// };

module.exports = chunk;

/*
Array chunk takes two arguments, the first is a an array, and the second is an integer that represents a size.
This function breaks up the original array by creating sub arrays of length size and returning them nested in
  a larger array.

i - array and integer size
o - array with sub arrays all of a length at most of size
c - n/a
e - array may contain values of differing type,
  array length might be less than size, if this is the case, the result will still be a nested array, but
    it will contain all of the elements of the original array

Considerations:
  I could use two nested loops.
    The outer loop would be for setting up a nested array.
    The inner loop would build the nested array and push it in into the result array.

    Return the fully nested array at the end.

Some pitfalls: The outer loop would skip a quantity of elements equal to the 'size' parameter
  on each loop. However, it should never exceed the total length of the input array.

  Also, the inner loop should be able to create a nested array that contains only elements
    from the input. It should never exceed the total length of the input, and must be able to build
    a final chunk that is less than the 'size' parameter if it the last chunk and the input array % size !== 0

*/