// helper function
// function collectOdds(nums) {
//   let odds = [];
//   function isOdd(nums) {
//     if (!nums.length) return;
//     if (nums[0] % 2 !== 0) {
//       odds.push(nums[0]);
//     }
//     isOdd(nums.slice(1));
//   }
//   isOdd(nums); 
//   return odds;
// }

function collectOdds(nums) {
  let oddsArr = [];
  if (!nums.length) return oddsArr;
  if (nums[0] % 2 !== 0) {
    oddsArr.push(nums[0]);
  }
  oddsArr = oddsArr.concat(collectOdds(nums.slice(1)));
  return oddsArr;
}

console.log(collectOdds([1,4,5,6,2,6,7,7,8,9])); // [1,5,7,7,9]