function areThereDuplicates (...args) {
  const map = {}
  for (let el of args) {
    if (map[el]){
      return true
    } else {
      map[el] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1,2,3))