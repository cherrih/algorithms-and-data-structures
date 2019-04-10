function sameFrequency(num1, num2){
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  const map1 = {};
  const map2 = {};
  for (let i = 0; i < str1.length; i ++) {
    map1[str1[i]] = map1[str1[i]] + 1 || 1;
    map2[str2[i]] = map2[str2[i]] + 1 || 1;
  }
  for (let key in map1) {
    if (map1[key] !== map2[key]) {
        return false;
    }
  }
  return true;
}
console.log(sameFrequency(1213, 42321))