const countDown = (num) => {
  if (num === 0) {
    return console.log('blastoff!')
  }
  console.log(num);
  num -= 1;
  countDown(num);
}

countDown(10);