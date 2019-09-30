// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// not working solution with for loop
// TODO: Complete this solution

// function capitalize(str) {
//   // make a copy of the string so as not to mutilate the input
//   let copy = str.slice();
//   // iterate through the string copy
//   for (let i = 0; i < copy.length; i++) {
//     let char = copy[i];
//     let nextChar = copy[i + 1];
//     if (i === 0) {
//       copy[i] = char.toUpperCase();
//     }
//     if (char === ' ') { // if a character === '  '
//       copy[i + 1] = nextChar.toUpperCase(); // call .toUpperCase() on the character at the index just after the current, space character
//     }
//   }
//   // after iteration is complete, return the string
//   return copy;
// };

// my initial split solution, a little messy
// function capitalize(str) {
//   // split string expression into an  array of words.
//   let words = str.split(' '); // this gives array of words
//   let capWords = [];
//   // I can split the expression on the space character to have a resulting array of words that all need a capital first character
//   for (let word of words) {
//     capWords.push(capWord(word));
//   }
//   return capWords.join(' ');
//   // write a helper function that will take a word and capitalize the first letter of that string and return it as a new word
//   // after modifying all the  words, rejoin the array into a  string  expresson and return  the expression
// };

// function capWord(word) {
//   // take in a string word
//   // capitalize the first character of that word,
//   // return the word
//   return word.slice(0, 1).toUpperCase() + word.slice(1);
// };

// now to siimplify the code:
// Super concise, readable and clean
function capitalize(str) {
  let words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
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

I am able to identify the correct string character. But, siple reassignment is not  enough to modify
  the string
I need to be able to call a replace function to actually modify the string
*/