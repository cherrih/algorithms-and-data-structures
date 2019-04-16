function linearSearch(arr, n) {
  let index = -1;
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === n) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(linearSearch([1,4,5,6,2,3,9], 2))