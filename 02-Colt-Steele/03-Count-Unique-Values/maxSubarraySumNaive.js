const maxSubarraySum = (arr, n) => {
  if (arr.length < n) {
    return null;
  }
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i ++) {
    let sum = arr[i];
    for (j = i + n - 1; j > i; j --) {
      sum += arr[j];
    }
    if (sum > maxSum) {
      maxSum = sum
    }
  }
  return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))