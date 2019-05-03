// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i ++) {
      for (let j = nums.length - 1; j > i; j --) {
        const num1 = nums[i];
        const num2 = nums[j];
        if (num1 + num2 === target) {
          result.push(i, j);
          return result;
        }
      }
  }
};

// time complexity: quadratic O(n^2)

const twoSumLinear = (nums, target) => {
  const result = [];
  let map = {};
  for (let i = 0; i < nums.length; i ++) {
    map[target - nums[i]] = i;
  }
  for (let j = 0; j < nums.length; j ++) {
    const num = nums[j];
    if(map[num] && map[num] !== j){
        result.push(j, map[num]);
        return result;
    }
  }
};
// time complexity: linear O(n)
