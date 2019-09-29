// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {


  return true; // If at no point the function can regect for innequality, return false at the very end
};

module.exports = anagrams;

/*
Write a function that compares two input string and returns whether they are anagrams of each other

i - two strings
o - boolean
c - only consider alphanumeric characters when making determination, do NOT use spaces,
  symbols, or punctuation
e - Strings are of different length, either their overall length or their regexp char length

I want to simplify the method that I use in order to automate as much of this operation as possible.

First because I want to ignore all of the non-alphanumeric characters, I should replace all
  of the invalid string characters by using a regexp combined with the string.replace() method.
String.replace() take two parameters, the first can be a string literral, or a regexp. Then I will replace
  all of the matching, invalid characters with an empty string.

After convertiing both of the string using a regexp, I will check to ensure that they are
  of the same length
If the two string are of the same length, continue with the function. However, if they are of
  different lengths, I can immediately return false since anagrams will always have the exact
  same number of characters

After determining that the two strings regexp are the same length, and only contain aplhanumeric,
  characters, I will make a character map of both strings.

I will use a for loop to build the character maps.

After all mapping, I will iterate through one of the maps and compare the value of every
  key on the inerable map.

If at any point the key-value comparison is not equal, return false.
However, if the entier mapping is able to complete, I will know that they functiion has
  found the string to be anagrams of each other and the function will return true at the very end.


*/