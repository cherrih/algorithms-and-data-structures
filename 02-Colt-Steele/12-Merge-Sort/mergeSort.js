function merge(left, right) {
  let arr = [];
  while(left.length && right.length) {
    if (left[0] < right[0]){
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(arr) {
  //base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([1,2,10,3,9,99,2,4,5]))

// Time complexity: O(n log n)