function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1,4,5,6,2,3,9], 2))

// time complexity: O(n) linear
// space complexity: O(1)