// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// first, iterative solution
function pyramid(n) {
  // calculate the number of columns for a given n
  // declare a center position and bind leftStep and rightStep to the center index value
  // run outer loop until row === n
    // declare a new level as an empty string
    // run inner loop to build a level

      // if current column index is less than leftStep or greater than rightStep
        // add a ' ' (space character) to level

        // else, add a '#' symbol to level,

    // console.log()  the current level string, then move on to another level and begin building again.
};

module.exports = pyramid;

/*
Write a function that takes in a positive integer n and prints out a series of strings making a pyramid shape
  that is n-length rows tall. The pyramid must be centered. It consists of hashtags '#' and spaces ' '.

i - positive integer n
o - no return value - output is a series of console.log() statements representing a string pyramid of n-height
c - no return statement, all console.log() 'rows' are strings consisting of pound signs and spaces
  IMPORTANT: The input n represents the height of the pyramid. Not the length of the row characters
e - Because n represents the height of the pyramid, I must calculate the length of each row (number
    of columns) dynamically to ensure that the top of the pyramid always holds a single hash character.

Some observations:
  The number of columns in any pyramid, of any height, will always be an odd number.

  The number of columns will always be (n * 2) - 1
    a pyramid of height 1 will have 1 column
    a pyramid of height 2 will have 3 columns
    a pyramid of height 3 will have 5 columns

  The center column of the pyramid will always be at index:
    Math.floor(length / 2)

  When building a level of the pyramid, I can keep track of the leftStair and the rightStair.
    This will allow me to place spaces until I reach the left stair, then hash symbols through
    until the right stair, then finish up the level with all remaining spaces.

  The default of leftStair and rightStair will be the center of a level. Then, with every level, they
    will move to the left and right respectively.

  After every level has been printed, level will reset to an empty string to be built again

  However, leftStair and rightStair will never reset. They will move appropriately when moving on
    to the next level

  When the number of levels, counter, is equal to n, end the function and stop printing.

  */