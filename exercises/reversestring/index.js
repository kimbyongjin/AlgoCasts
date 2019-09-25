// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Brute force solution
// function reverse(str) {
//   let acc = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     let char = str[i];
//     acc += char;
//   }
//   return acc;
// };


// Elegant solution with native methods
// function reverse(str) {
//   return str.split('').reverse().join('');
// };


// Another solution using the array.reduce() native method.
// This solution is probably the most interesting and inteligent-looking
function reverse(str) {
  return str.split('').reduce((reversed, char) => {
    return char + reversed
  }, '');
};

module.exports = reverse;

/*
Take an input string, reverse the string and return the reversed string at the end.

i - string
o - same string, but reversed
c - Do I want to modify the original string, or make a copy and return the reversed version of that string?
  Let's make a copy and not mutilate the input
e - empty string, string with numerical characters, numbers, punctuation, spaces, symbols, etc.


brute force solution:
declare a empty string to start building the reverse
iterate through the string backwards,
for every character, accumulator result string concatenates a char,
After all iteration has been done, return the acc string

Elegant solution,
split the string into an array of each character,
call native method array.reverse() on the array of characters
call array.join('') to rejoin the array of reversed characters back into a string
return the string at the end

*/