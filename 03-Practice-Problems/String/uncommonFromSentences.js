// https://leetcode.com/problems/uncommon-words-from-two-sentences/submissions/
var uncommonFromSentences = function(A, B) {
  const arrA = A.split(' ');
  const arrB = B.split(' ');
  const len = A.length > B.length ? A.length : B.length;
  const map = {};
  const output = [];
  for (let i = 0; i < len; i ++){
      if (arrA[i]) {
          map[arrA[i]] = map[arrA[i]] + 1 || 1;
      }
      if (arrB[i]) {
          map[arrB[i]] = map[arrB[i]] + 1 || 1;
      }
  }
  for (let key in map) {
      if (map[key] === 1) {
          output.push(key);
      }
  }
  return output;
};

// time and space complexity: linear