// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// using reverse
// function reverse(str) {
//   
//   return str.split('').reverse().join('');
// }

// without using reverse()
// const reverse = (str) => {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// using reduce
const reverse = (str) => {
  return str.split('').reduce((rev, char) => char + rev, '');
}

// runtime complexity: linear

module.exports = reverse;
