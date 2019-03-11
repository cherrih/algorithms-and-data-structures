// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create empty array of arrays
  const results = new Array(n).fill();
  results.forEach((el, i) => results[i] = new Array(n));
  // create counter variable, starting at 1
  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    // start col to end col
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter ++;
    }
    startRow ++;
    // start row to end row
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter ++;
    }
    endCol --;
    // end col to start col
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter ++;
    }
    endRow --;
    // end row to start row
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter ++;
    }
    startCol ++;    
  }
  return results;
}

module.exports = matrix;
