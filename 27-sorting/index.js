// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (i = 0; i < arr.length; i ++) {
    for(j = 0; j < arr.length - i; j ++) {
      if(arr[j] > arr[j + 1]) {
        const curr = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = curr;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
