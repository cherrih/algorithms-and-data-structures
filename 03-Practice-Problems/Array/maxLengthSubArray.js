// https://leetcode.com/problems/maximum-length-of-repeated-subarray/

var findLength = function(A, B) {
  let longest = 0;
  for (let i = 0; i < A.length; i++) {
      let count = 0;
      for (let j = 0; j < B.length; j ++) {
          if (A[i] === B[j]) {
              let k = i;
              let l = j;
              while (A[k] === B[l] && k < A.length && l < B.length) {
                  count += 1;
                  k += 1;
                  l += 1;
              }
              longest = longest > count ? longest : count;
              count = 0;
          }
      }
  }
  return longest;
};

// time complexity: quadratic
