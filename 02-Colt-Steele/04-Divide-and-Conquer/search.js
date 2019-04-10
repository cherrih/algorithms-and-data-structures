const search = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max){
    let mid = Math.floor((min + max) / 2);
    if (arr[mid] < val) {
      min = mid + 1;
    } else if (arr[mid] > val) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(search ([0,1,2,3,4,5,6], 7))