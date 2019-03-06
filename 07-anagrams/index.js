// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Initial solution

// function anagrams(stringA, stringB) {
//   const a = stringA.replace(/[^\w]/g, '').toLowerCase();
//   const b = stringB.replace(/[^\w]/g, '').toLowerCase();
//   if (a.length !== b.length) {
//     return false;
//   }
//   const aMap = {};
//   const bMap = {};
//   for (let i = 0; i < a.length; i ++) {
//     aMap[a[i]] = aMap[a[i]] + 1 || 1;
//     bMap[b[i]] = bMap[b[i]] + 1 || 1;
//   }
//   for (let key in aMap) {
//     if (aMap[key] !== bMap[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// Solution with helper function

// const buildCharMap = (str) => {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// const anagrams = (stringA, stringB) => {
//   const aMap = buildCharMap(stringA);
//   const bMap = buildCharMap(stringB);

//   if (Object.keys(aMap).length !== Object.keys(bMap).length) {
//     return false;
//   }
//   for (let key in aMap) {
//     if (aMap[key] !== bMap[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// Solution with sort

//clean up strings, sort both strings, check if equal
const cleanString = (str) => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
const anagrams = (stringA, stringB) => {
  return cleanString(stringA) === cleanString(stringB);
}


module.exports = anagrams;
