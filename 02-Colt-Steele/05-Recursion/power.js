// iterative
// function power(base, exp) {
//   if (exp === 0) {
//     return 1;
//   }
//   let total = 1;
//   for (let i = exp; i > 0; i --) {
//     total *= base;
//   }
//   return total;
// }

// recursive
function power(base, exp){
  if (exp === 0) return 1;
  if (exp === 1) return base;
  return base * power(base, exp - 1);
}

console.log(power(2,2),
  power(2, 0),
  power(2,4));