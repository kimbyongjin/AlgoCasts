// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Basic, naive iterative solution using a hacky array of vowels
// function vowels(str) {
//   let vowelCheck = ['a', 'e', 'i', 'o', 'u'];
//   let counter = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowelCheck.includes(char) {
//       counter++;
//     }
//   }
//   return counter;
// };


// SLick, concise solution using a regexp to replace all of the non-vowels with an empty string, ignore case,
// and return the length fo all remaining characters that don't match the pattern.
// function vowels(str) {
//   return str.replace(/[^aeiou]/gi, '').length;
// };

// Alternative regexp solution usinig string.match
function vowels(str) {
  // in this example, matches returns an array of all matches to the regexp, or it returns
    // null if no matches found. So the ternary expression handles a falsey value of null, or the length of
    // the array of matches which will all be vowels.
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

// RegExp pattern matches:
  // ^ -> In this case as the first character in a character set, the carrot denotes a negated
    // or complemented character set. This pattern will match everything NOT included in the brackets.

  // the vowels a*e*i*o*u select for those letter specifically, not a range.

  // the g flag after the closing regexp bracket and slash denotes a global search, checking the
    // entire string expression

  // the i flag after the closing regexp bracket and slash denotes a case incensitive search. This
    // is important so that the function counts all vowel occurances regardless of case.

module.exports = vowels;

/*
write a function that take in a string expression and returns an integer represeting the number of vowel
  characters contained in the expression.

i - string expression
o - integer count of vowels in string expression
c - y is not a vowel in this case and should not be counted
e - no vowels, should return 0
  the letter 'y' is not a vowel for the consideraton of this function
  symbols, punctuation, numbers, etc should all be disregarded, of course
  vowel count shoudl include both lower case and upper case characters

Iterative solution could take many shapes.
I could declare an array of vowels,
  iterate through the string, checking each character for whether it is included in the array of vowels,
  When encountering a vowel, increment the counter and return the counter at the end.
*/
