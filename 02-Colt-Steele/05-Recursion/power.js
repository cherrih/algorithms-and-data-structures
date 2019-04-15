// iterative
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  let total = 1;
  for (let i = exp; i > 0; i --) {
    total *= base;
  }
  return total;
}

console.log(power(2,2),
  power(2, 0),
  power(2,4));