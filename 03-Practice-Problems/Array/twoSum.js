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

// https://leetcode.com/problems/two-sum/