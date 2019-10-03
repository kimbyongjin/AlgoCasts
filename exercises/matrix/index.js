// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const spiral = [];
  for (let i = 0; i < n; i++) {
    spiral.push([]);
  }

  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  let counter = 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    for (let column = startColumn; column <= endColumn; column++) {
      spiral[startRow][column] = counter;
      counter++;
    }
    startRow++;

    for (let row = startRow; row <= endRow; row++) {
      spiral[row][endColumn] = counter;
      counter++;
    }
    endColumn--;

    for (let column = endColumn; column >= startColumn; column--) {
      spiral[endRow][column] = counter;
      counter++;
    }
    endRow--;

    for (let row = endRow; row >= startRow; row--) {
      spiral[row][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return spiral;
};

module.exports = matrix;

/*
// This is my first attempt. I use a recursive call at the end instead of a while loop.
// We remake and try to clean it up a lot.

function matrix(n, val = 0, max = n * n, startRow = 0, endRow = n - 1, startCol = 0, endCol = n - 1) {
  // first create an NxN matrix with empty values
  // use the Array constructor to make an empty array then push into it n-number of n-length
    // empty arrays into it

  function buildArray(n) {
    let arr = Array();
    for (let i = 0; i < n; i++) {
      arr.push(Array(n));
    }
    return arr;
  }

  let spiral = arguments[7] || buildArray(n);
  // declare a val that will be the incrementing value that is inserted in the spiral
  // the function must end when val === n^2

  // These given default values in function definition and for recursion
  // let val = 0;
  // let max = n * n;

  // set bindings for:
  // startRow = 0
  // endRow = n - 1
  // startCol = 0
  // and endCol = n - 1

  // given new default values
  // let startRow = 0;
  // let endRow = n - 1;
  // let startCol = 0;
  // let endCol = n - 1;


  // FIRST PASS
  // kick off first pass traversing along start row
    // access matrix[startRow][startCol] as the first value
      // insert a value, increment the value
      // check that value is <= n^2
        // if yes, continue pass
        // else, end the function and return matrixSpiral

      // if continuing the pass, insert, increment, and check values accessing next value by incrementing
        // the value of startCol variable in matrix access.
        // So, the second value to be inserted would fall at matrix[startRow][startCol + 1]
          // continue until the second matrix parameter === the value of endCol

          // after reaching endCol, increment the persistent value of startRow *THIS IS VERY IMPORTANT*
  for (let col = startCol; col <= endCol; col++) {
    val++
    spiral[startRow][col] = val;
  }
  startRow++

  if (val === max) {
    return spiral;
  }

  // SECOND PASS
    // traversal is along endCol
    // access first value for insertion located at matrix[startRow][endCol]
      // insert val, increment val, check that val is less than n^2

      // if possible, continue traversing the endCol and access the next value at matrix[startRow + 1][endCol]
      // once startRow === endRow, end traversal of endCol
        // DECREMENT endCol, and move on to third pass
  for (let row = startRow; row <= endRow; row++) {
    val++;
    spiral[row][endCol] = val;
  }
  endCol--;
  if (val === max) {
    return spiral;
  }

  // THIRD PASS
    // traversal of endRow from endCol to startCol
    // access first value at matrix[endRow][endCol]
      // insert val, increment val, check that val is <= n^2
      // if possible, insert next value at martix[endrow][endCol - 1]

      // Continue insertion of values until endCol === startCol
      // after ending pass, decrement endRow and move on to fourth pass
  for (let col = endCol; col >= startCol; col--) {
    val++
    spiral[endRow][col] = val;
  }
  endRow--;
  if (val === max) {
    return spiral;
  }

  // FOURTH PASS
    // traversal of startCol from endRow to startRow
    // access first value at matrix[endRow][startCol]
      // insert val, increment val, check that val <= n^2

      // if possible, continue traversal and access next value at matrix[endRow - 1][startCol]
      // once endRow ===  startRow, end traversal/insertion
        // DECREMENT value of endRow and restart back to FIRST PASS iif possible
  for (let row = endRow; row >= startRow; row--) {
    val++;
    spiral[row][startCol] = val;
  }
  startCol++;
  if (val === max) {
    return spiral;
  }
  // Once val === n^2
    // return matrix

  return matrix(n, val, max, startRow, endRow, startCol, endCol, spiral);
};

*/

/*
Write a function that accepts an integer n and returns a nxn (n by n) spiral matrix

i - integer n
o - NxN spiral matrix
c - A spiral matrix will contaiin numerical values starting at 1, and ending at n^2. So, a 2x2 matrix
  will be contain the values from 1 to 4 (2^2).
e - Input value of 0 should return empty array [].
  As the matrix spirals inward, the values will be placed in a more deeply nested spiral. The insertion
    process will always go clockwise.
    And, the insertion process will always start at matrix[0][0]
  With each stage of the insertion process, the number of values that are to be inserted will decrease.

If I first create a matrix with all of the placeholder values set to null, undefined, or really anything,
  I can safely replace old values with new values to the Matrix and never have to worry about
    running into side effects like reordering values.

  Because arrays are ordered and indexed, I cannot safely remove or insert values without the array trying
    to rectify empty spaces. I want to only replace invalid values with valid values.

Binding variables to the boundary columns and rows:
startRow defaults to 0
endRow defaults to n - 1

startCol defaults to 0
endCol defaults to n - 1

val defaults to 1 and is to never exceed n^2
  val is always the value swapped into the matrix, and incremented correspondingly.

I will consider each stage of insertion as a pass.

  On the first pass, insertion will fill the startRow with values from startCol to endCol
    Then, startRow will be INCREMENTED

  On the second pass, insertion will begin along the endCol from startRow to endRow.
    Then the endCol will be DECREMENTED.

  On the third pass, insertion will fill the endRow from endCol to startCol.
    Then the endRow will be DECREMENTED.

  On the fourth pass, insertion will fill the startCol from endRow to startRow.
    Then the startCol will be INCREMENTED.

These four passes are the pattern of spiral insertion.
  At the end of every pass, a check should be made to compare the value of val === n^2. Once that happens,
    cease the insertion and return the spiral matrix.

There are cases when not even all four passes will trigger. This is the case of a 2x2 matrix, and 1x1 matrix.



Considering a 2x2 spiral matrix ->
Start:
[
  [null, null],
  [null, null]
]

After first pass:
[
  [1, 2],
  [null, null]
]

After second pass
[
  [1, 2],
  [null, 3]
]

After third pass
[
  [1, 2],
  [4, 3]
]

fourth pass not necessary, val === n^2
  return matrix.


Observations:
  After a pass inserting values into a colum or row that is a start* prefix, that
    corresponding start* boundary will be incremented
  And, after a pass that inserts values into a col or row with an end* prefix, the corresponding
    end* boundary will be decremented.

  This will achieve the desired result that all rows ar moving towards each other,
    And, all columns are moving towards each other.
*/
