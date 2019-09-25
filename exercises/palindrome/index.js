// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution using the array.every() method
// This solution is not ideal because it forces us to make a comparison check on every pair
  // of elements in the array. However, we only need to check half of the pairs. Once we get to the middle,
  // it becomes redundant to check additional pairs.

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - 1 - i];
  });
};

// reverse string and reduce solution:
// function palindrome(str) {
//   const reversed = str.split('').reduce((rev, char) =>  {
//     return char + rev;
//   }, '');

//   // if (reversed === str) {
//   //   return true;
//   // }
//   // return false;

//   // Or:
//   return reversed === str;
// };

module.exports = palindrome;



/*
Take a string and determing if is a palindrome.
This problem requires strict comparison of a string with its reversed form. I can use the reverseString
  logic from the previous problem to help me here.

i - string
o - BOOLEAN
c - Do no modify the input. I need to check my reversed solution to the original input.
  This function shoud determing whether or not a string is a palindrome. Not modify the input string
e - I am including spaces, so ensure that what ever function I write DOES take into consideration
  these characters,
  Also, symbols, numerical characters, punctuation, uppercase and lowercase letters, etc

Take input string and reverse it,
Compare reversed string to the original,
If the two have strict equality, return true,
else, return false
*/