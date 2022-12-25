function duplicateLetters(string) {
  let x = string.split("");
  let count = {};
  for (let letter of x) {
    let tempCount = 0;
    for (let l of x) {
      if (l == letter) {
        tempCount++;
      }
    }
    if (!count[letter]) {
      count[letter] = tempCount;
    }
  }
  let maxRepeated = Object.values(count).reduce(
    (acc, x) => (x > acc ? x : acc),
    0
  );
  return maxRepeated != 1 ? maxRepeated : false;
}
export { duplicateLetters };
