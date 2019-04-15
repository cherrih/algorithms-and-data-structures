// iterative solution
// const factorial = (num) => {
//   let total = 1;
//   for (let i = num; i > 1; i --) {
//     total *= i;
//   }
//   return total;
// }

// recursive solution 

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(4)); // 6
