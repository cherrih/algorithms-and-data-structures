const maxSubarraySum = (arr, n) => {
  if (arr.length < n) {
    return null;
  }
  let max = 0;
  let temp = 0;
  for (let i = 0; i < n; i ++) {
    max += arr[i];
  }
  temp = max;
  for (let i = n; i < arr.length; i ++) {
    temp = temp + arr[i] - arr[i - n];
    max = Math.max(temp, max);
  }
  return max;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) // 10