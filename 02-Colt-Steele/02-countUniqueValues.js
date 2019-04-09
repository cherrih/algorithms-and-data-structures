const countUniqueValues = (arr) => {
  let first = 0;
  let second = 1;
  while(second < arr.length) {
    if (arr[first] !== arr[second]) {
      first += 1;
      arr[first] = arr[second];
    }
    second += 1;
  }
  return first + 1;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,4,7,7,12,12,13]));