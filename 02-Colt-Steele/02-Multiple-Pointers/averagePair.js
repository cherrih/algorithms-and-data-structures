function averagePair(arr, av){
  if (arr.length < 2) {
    return false;
  }
  let i = 0;
  let j = arr.length - 1;
  while (i !== j){
    if ((arr[i] + arr[j]) / 2 === av){
      return true;
    } else if ((arr[i] + arr[j]) / 2 > av){
      j -= 1;
    } else {
      i += 1;
    }
  }
  return false;
}
console.log(averagePair([1,2,3],2.5)) //true
console.log(averagePair([1,3,3,5,6,7,10,12,15,19], 8)) //true
console.log(averagePair([-1,4,9],3)) //false
