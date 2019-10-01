// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// iterative solution for steps
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
};


module.exports = steps;


// First, iterative solution.
// function steps(n) {
//   // build a string that of length n of all spaces
//   // this builds a string of all space characters the correct length of n
//   // baseline:
//   let step = '';
//   for (let i = 0; i < n; i++) {
//     step += ' ';
//   }

//   // bind a counter to 0
//   let counter = 0;

//   while (counter < n) { // run loop while counter < n
//     step = step.slice(0, counter) + '#' + step.slice(counter + 1);
//     console.log(step);
//     // inside the loop, modify the step string at inidex[count]
//     // console.log the string
//     counter++;
//   }
// };

/*
write a function that uses the # character to print out steps following a pattern
  related to the input positive integer N. From 1 to N, print out an n-length string with progressivel
  increasinig # characters and decreasing spaces.

i - positive integer N
o - series of console.log prints of an n-length string consisting of space and hash signs.
c - The console statement sould always be of n-length.
e - input of 0, maximum safe N size, extreme time complexity.

To keepin mind, the number N that is input to the function is both the char length of
  every string consle statement. AND, it is also the number of total lines that are prined out
  to the console.

  Considerations:
  I could first create a generic string that will represent the first step. Then kick off
    a loop n-number of times that will modify the string and console each time.
  One trick will be to ensure that I console the first step and the last step.
  If I decide to console before modification, I will start with a single pound step.
  However, if I decide to console after modification, I must start with a string that consists of only spaces.

  Declare a string that I will be  consoling, let's call it step.

  bind an counter variable to 0
  run a while loop that increments the counter until it reaches N.
  modify and console the string for each loop

  return nothing at the end.

Notes on building a recursive solution

Each function call should console the appropriate step.
This could be done in a way very similar to the while loop.
A while loop is essentially like a function call that repeats logic and changes a parameter  withinthe loop

I need to pass along a parameter in the recursive solution that sends along the current step, and
  decrements it appropriately.
*/