function recursiveRange(n){
  if (n === 1) return n;
  return n + recursiveRange(n - 1);
}

console.log(recursiveRange(10)); // 55
console.log(recursiveRange(2)); // 3
console.log(recursiveRange(1)); // 1
