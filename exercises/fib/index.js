// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let sequence = [0, 1];

  while (sequence.length <= n) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }

  return sequence[n];
};

module.exports = fib;

/*
Write a fucntion that returns the target element n in the fibonacci series.

i - integer n
o - integer that is located at index n of the fib sequence
c - the fib sequence is always the same, it follows a clear set of rules that will never change.
e - While the sequence is always the same, the first two entries are generated without the algorith formula.
  The fibonacci sequence starts with 0 then 1. Once these values have been generated, the
    normal pattern of the sequence can begin.

  Every element in the sequence is the sum of the two preceeding values, with the exception of the
    very first two values.

  To solve this algorithm, first I must write a function that generates the sequence up to n-number of elements. Then, I can
    return the element located at the index n generated.

  
*/