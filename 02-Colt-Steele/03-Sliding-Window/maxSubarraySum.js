const maxSubarraySum = (arr, n) => {
  if (arr.length < n) {
    return null;
  }
  let max = 0;
  for (let i = 0; i < n; i ++) {
    max += arr[i];
  }
  let temp = max;
  for (let i = n; i < arr.length; i ++) {
    temp = temp + arr[i] - arr[i - n];
    max = Math.max(temp, max);
  }
  return max;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) // 10

// function maxSubarraySum(arr, num){
//   if (arr.length < num) return null;

//   let total = 0;
//   for (let i=0; i<num; i++){
//      total += arr[i];
//   }
//   let currentTotal = total;
//   for (let i = num; i < arr.length; i++) {
//      currentTotal += arr[i] - arr[i-num];
//      total = Math.max(total, currentTotal);
//   }
//   return total;
// }