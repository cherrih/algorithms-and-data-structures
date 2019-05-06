// https://leetcode.com/problems/is-subsequence/

var isSubsequence = function(s, t) {
  if (!s.length) {
    return true;
  }
  let j = 0;
  for (let i = 0; i < t.length; i ++) {
    if (t[i] === s[j]) {
      j += 1;
      if (j === s.length) {
        return true;
      }
    }
  }
  return false;
};

// time complexity: linear
// space complexity: constant