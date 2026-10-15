function getGCF(x, y) {
  let num = Math.min(x, y);
  let factor = 0;
  for (let i = 2; i < num; i++) {
    if (x % i === 0 && y % i === 0) {
      factor = i;
    }
  }
  return factor;
}
console.log(getGCF(30, 15));