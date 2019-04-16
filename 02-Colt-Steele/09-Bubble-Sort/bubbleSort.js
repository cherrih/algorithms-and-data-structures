function bubbleSort(arr) {
  let noSwaps;
  for(let i = arr.length - 1; i > 0; i --) {
    noSwaps = true;
    for (let j = 0; j < i; j ++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j]
        arr[j] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([4,10,9,3,2,7]));
console.log(bubbleSort([8,1,2,3,4,5,6]));

// time complexity: n^2
// if nearly sorted, more like linear time O(n)