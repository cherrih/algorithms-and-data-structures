// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i ++) {
    for(let j = 0; j < arr.length - i - 1; j ++) {
      if(arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  // prove me wrong
  for (let i = 0; i < arr.length; i ++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j ++) {
      if (arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    if (arr[i] !== arr[minIndex]) {
      const lower = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = lower;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}

// two sorted arrays and join together in correct order
function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    let lesser = left[0] < right[0] ? left : right;
    results.push(lesser.shift());
  }
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
