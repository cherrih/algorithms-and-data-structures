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

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;
 
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }