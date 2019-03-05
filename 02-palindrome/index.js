// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// using reverse
// function palindrome(str) {
//   let newStr = str;
//   return str === newStr.split('').reverse().join('');
// }

// not using reverse
// const palindrome = (str) => {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed === str;
// }

// using reduce
const palindrome = (str) => {
  return str === str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = palindrome;
