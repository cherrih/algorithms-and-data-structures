var containsDuplicate = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i ++) {
      if (map[nums[i]] === 1) {
          return true;
      } else {
          map[nums[i]] = 1;
      }
  }
  return false;
};

console.log(containsDuplicate([0,1,2,0,8]));

//time complexity: linear
//space complexity: linear