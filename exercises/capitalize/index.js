// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // make a copy of the string so as not to mutilate the input
  // iterate through the string copy
    // if a character === '  '
      // call .toUpperCase() on the character at the index just after the current, space character
  // after iteration is complete, return the string
};

module.exports = capitalize;

/*
write a function that takes in a string expression and returns that same string expression but with
  the first character of every word in that string capitalized.

i - string expression
o - same string expression but with the first character of every word in that string expression capitalized
c - n/a
e - string expression that has other capital letters in it. I can leave them the same.
  But, I must follow the logic that the first char of each word in the string is always capital

One solution would be to iterate through the string. And, find every character that === ' '.
Every space character must be followed by a capitalized string character. I could, in one fell swoop,
  iterate through and follow each space character with a .toUpperCase() method call.

  This is a pretty brute force solution. But, It's also simple and concise.

How can I build in a helper function to separate the operations of this function?

I will write a function that will identify a space character, then call the helper function
  on the character immediately after the space character.

Although, itmght be just as easy to write it out in a single step.
*/