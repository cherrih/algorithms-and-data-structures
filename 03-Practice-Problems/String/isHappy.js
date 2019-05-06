// https://leetcode.com/problems/happy-number/

var isHappy = function(n) {
  const seen = {};
  while (n !== 1 && !seen[n]) {
      seen[n] = true;
      n = sumOfSquares(n);
  }
  return n === 1 ? true : false;
};

var sumOfSquares = function(num) {
  return num.toString().split('').reduce((sum, num) => {
      return sum += num * num;
  }, 0)
};
