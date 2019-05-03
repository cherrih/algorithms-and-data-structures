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

const productExceptSelfLinear = (nums) => {
  let result = [];
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= right;
    right *= nums[j];
  }
  return result;
}
// time complexity: linear
