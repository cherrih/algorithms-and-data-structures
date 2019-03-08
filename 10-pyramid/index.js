// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// iterative solution

// function pyramid(n) {
//   const maxCol = n * 2 - 1;
//   for (let row = 0; row < n; row ++ ) {
//     let level = '';
//     for (let col = 0; col < maxCol; col ++) {
//       if (col <= n - 1 + row && col >= n - 1 - row) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// recursive solution

const pyramid = (n, row = 0, col = 0, level = '') => {
  const maxCol = n * 2 - 1;
  // base case return 
  if (row === n) {
    return;
  }
  if (level.length === maxCol) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const add = col <= n - 1 + row && col >= n - 1 - row ? '#' : ' ';
  pyramid(n, row, col + 1, level + add);
}

module.exports = pyramid;
