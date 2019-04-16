function stringSearch(str, subStr) {
  let count = 0;
  for (let i = 0; i < str.length; i ++) {
    for (let j = 0; j < subStr.length; j ++) {
      if (str[i + j] !== subStr[j]) break;
      if (j === subStr.length - 1) count += 1;
    }
  }
  return count;
}

console.log(stringSearch('hello yellow belly', 'ell')); // 3
console.log(stringSearch('how now brown cow', 'ow')); // 4