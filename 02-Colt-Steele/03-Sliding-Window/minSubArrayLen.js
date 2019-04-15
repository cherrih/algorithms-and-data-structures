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

// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;
 
//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then 
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window 
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     } 
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//     else {
//       break;
//     }
//   }
 
//   return minLen === Infinity ? 0 : minLen;
// }
