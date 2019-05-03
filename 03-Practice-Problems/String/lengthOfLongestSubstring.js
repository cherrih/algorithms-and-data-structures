var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) return s.length;
  let map = {[s[0]]: 1};
  let longest = 0;
  let start = 0;
  for (let i = 1; i < s.length; i ++) {
      const end = s[i];
      if (map[end] !== 1) {
        map[end] = 1;
      } else {
        longest = longest > Object.keys(map).length ? longest : Object.keys(map).length;
        while(s[start] !== end) {
          delete map[s[start]];
          start += 1;
        }
        start += 1;
      }
  }
  
  return longest > Object.keys(map).length ? longest : Object.keys(map).length;
};
console.log(lengthOfLongestSubstring("pwwkew")); // 3

// time complexity: linear
// space complexity: linear
