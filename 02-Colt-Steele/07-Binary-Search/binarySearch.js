function binarySearch(arr, val){
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right){
  let middle = Math.floor((left + right) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      left = middle;
    } else {
      right = middle;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 2)); // 2
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9)); // 9
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5)); // 4
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 7)); // 6
