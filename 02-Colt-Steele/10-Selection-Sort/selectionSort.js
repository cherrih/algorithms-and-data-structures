function selectionSort(arr) {
  for (let i = 0; i < arr.length; i ++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (arr[min] !== arr[i]) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([1,56,4,7,3]))
console.log(selectionSort([0,99,-2,5,9]))

// time complexity: O(n^2) we have to compare every
//  element to every other element in the array
// as the length of the array grows, the number of comparison grows
// roughly at the rate of n times