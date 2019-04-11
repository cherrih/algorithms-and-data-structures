function isSubsequence(subStr, str) {
  let i = 0;
  let j = 0;
  while(i < subStr.length && j < str.length) {
    if (subStr[i] === str[j]) {
      i += 1;
    }
    j += 1;
  }
  if (i === subStr.length) {
    return true;
  } else {
    return false;
  }
}
console.log(isSubsequence('hello','hello world')) // true
console.log(isSubsequence('abc','acb')) // false
console.log(isSubsequence('ahoy','a holiday')) //true