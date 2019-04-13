function minSubArrayLen(arr, n) {
  if (!arr.length) {
    return 0;
  }
  let left = 0;
  let right = 1;
  let minLength = Infinity;
  let sum = arr[0];
  while(right <= arr.length){
    if (sum < n) {
      sum += arr[right++]
    } else {
      if (minLength > right - left) {
        minLength = right - left;
      }
      sum -= arr[left++]
    }
  }
  return minLength < Infinity ? minLength : 0;
}

console.log(minSubArrayLen([2,3,1,2,4,3],7)) // 2