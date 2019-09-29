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
  // convert both stringA and stringB to a regexp that will satisfy the anagram constraints
  const expA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const expB = stringB.replace(/[^\w]/g, '').toLowerCase();

  // check and compare the lengths of both strings, if unequal, return false, else do nothing
  if (expA.length !== expB.length) {
    return false;
  }
  // declare a new object character map for each string

  let mapA = {};
  let mapB = {};
  // iterate through both strings and build a character map for each.
  for (let i = 0; i < expA.length; i++) {
    let charA = expA[i];
    let charB = expB[i];
    if (!mapA[charA]) {
      mapA[charA] = 1;
    } else {
      mapA[charA]++;
    }

    if (!mapB[charB]) {
      mapB[charB] = 1;
    } else {
      mapB[charB]++;
    }
  }
  // iterate through one character map,
  for (let char in mapA) {
    if (mapA[char] !== mapB[char]) { // compare every key's value to the corresponding key's value in the second map
      return false; // if there is ever innequality, exit and return false
    }
  }
  // else, do nothing and allow iteration to finish

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