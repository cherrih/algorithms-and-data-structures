// https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i ++) {
    let temp = 1;
    for (let j = 0; j < nums.length; j ++) {
      if (i !== j) {
        temp *= nums[j];
      }            
    }
    result.push(temp);
  }
  return result;
};

// time complexity: quadratic
// space complexity: linear
