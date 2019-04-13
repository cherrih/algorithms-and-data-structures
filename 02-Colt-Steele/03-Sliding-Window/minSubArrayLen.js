function minSubArrayLen(arr, n) {
  if (!arr.length) {
    return 0;
  }
  let left = 0;
  let right = 1;
  let minLength = Infinity;
  let sum = arr[0];
  // keep track of length of the array 
  // i minus count is index of first el of subarray
  while(right <= arr.length){
    if (sum < n) {
      sum += arr[right++]
    } else {
      if (minLength > right - left) {
        minLength = right - left;
        sum -= arr[left++]
      }
    }
  }
  return minLength < Infinity ? minLength : 0;
}