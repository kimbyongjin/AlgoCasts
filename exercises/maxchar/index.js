// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let hash = {}; // empty character map

  for (let char of str) { // building this is also called building a character map
    if (!hash[char]) {
      hash[char] = 1;
    } else {
      hash[char]++;
    }
    // instead of using an if statement, I can also us boolean logic such as the following:
    // hash[char] = hash[char] + 1 || 1;
  }



  let topChar = '';
  let maxCount = 0;
  for (let key in hash) {
    if (hash[key] > maxCount) {
      maxCount = hash[key];
      topChar = key;
    }
  }

  return topChar;
};


module.exports = maxChar;

/*
Take a string input and return the character that occurs most frequently in that string

i - string expression
o - string character, a single character that is the most common character in that string.
c - n/a
e - empty string would return empty string,
  more than one character tied for most common occurence
  Should I return the character tied for max that first occurs first in the string? How to handle this?
  uppercase and lowercase characters are considered distinct.
  numerical characters, punctuation, symbols, etc


solution:
  declare a hash object to begin
  iterate through string,
    if hash object has no key equal to the corresponding current character,
      make a key in the object and set value to 1

    else, if key does exist, increment the value of that key by 1

  After the entire string has been iterated through and the object has been built,
    traverse the object and return the key that has the greatest corresponding value.

*/