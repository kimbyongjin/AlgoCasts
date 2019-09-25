// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {}

module.exports = reverseInt;

/*
Take in a number and return a new number that is the representation of the first number
  but with the digits reversed.
  This number should remain negative if the input was negative.
  Also, there should be no leading zeroes.
  i.e. 500 => 5

i - number (integer for the sake of this example)
o - number with the digits reversed
c - This number should remain negative if the input was negative.
  Also, there should be no leading zeroes.
  i.e. 500 => 5
e - negative numbers, trailing / leading zeroes, non-integer numbers,

Consider using the toString() method of converting the number to a string,
  performing the reversal on the number,
  convert string number back to a datatype number
  handle what was trailing zeroes that are now leading zeroes
  handle negative input that must now also be negative output
  return reversed number

*/