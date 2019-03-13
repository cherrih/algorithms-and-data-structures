// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// iterative solution

// function fib(n) {
//   const fibs = [0, 1];
//   for (let i = 2; i <= n; i ++) {
//     fibs.push(fibs[i - 1] + fibs[i - 2]);
//   }
//   return fibs[n];
// }

// Runtime complexity is O(n) - linear runtime
// for every increase in n, we have to calculate one additional number

// recursive solution

const fib = (n, fibs = [0, 1]) => {
  if (fibs.length === n + 1){
    return fibs[n];
  }
  const a = fibs[fibs.length - 1];
  const b = fibs[fibs.length - 2];
  fibs.push(a + b);
  return fib(n, fibs);
}

module.exports = fib;
