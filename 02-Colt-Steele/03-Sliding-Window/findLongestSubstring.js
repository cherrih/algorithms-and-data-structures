function findLongestSubstring(str){
  if (str.length < 2) {
    return str.length;
  }
  let map = {};
  let start = 0;
  let end = 0;
  let longest = 0;
  while (start < str.length) {
    if (!map[str[start]]) {
      map[str[start]] = 1;
      start ++;
    } else {
      end ++;
      map = {};
      start = end;
    }
    longest = Math.max(longest, Object.keys(map).length);
  }
  
  return longest;
}

console.log(findLongestSubstring('longestsubstring'))
