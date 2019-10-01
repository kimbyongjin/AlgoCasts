// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      counter++;
    }
  }
  return counter;
};

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
