// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // can also use: if (i % 15 === 0) because 3 * 5 === 15
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};

module.exports = fizzBuzz;

/*
fizzBuzz attemts to console.log() all the numbers from 1 to n, printing the number.
However:

If the number is a multiple of 3, print 'fizz'
If the number is a multiple of 5 instead print 'buzz'
If the number is a multiple of 3 && 5 print 'fizzbuzz'
If the number is not a multiple of 3 || 5, print the number

i - integer, n
o - nothing returned. This function's purpose is to console log the numbers or the proper string for
  that number following the multiple by 3 and or 5 logic.
c - n/a
e - the function should start printing with the number 1
  The function should print through the number n, inclusive of n.
  If n is negative, nothing will be printed.
  If n is not an integer, it will print up to n and print n at the very end

Set a for loop from 1 to n
determine logic for printing string or number

Do not return at the end.

*/