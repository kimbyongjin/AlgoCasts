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

function matrix(n) {}

module.exports = matrix;

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

  On the second pass, insertio will begin along the startCol from startRow to endRow.
    Then the startCol will be DECREMENTED.

  On the third pass, insertion will fill the endRow from endCol to  startCol.
    Then the endRow will be decremented.

  On the fourth pass, insertion will fill the startCol from endRow to startRow.
    Then the startCol will be incremented.

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

*/
