function sumFibs(num) {
  let num1 = 1;
  let num2 = 1;
  let oddSum = num1 + num2;
  while (num1 + num2 < num) {
    let temp = num2;
    num2 = num1 + num2;
    num1 = temp;
    if (num2 % 2 != 0) {
      oddSum += num2;
    }
  }
  return oddSum;
}

export { sumFibs };
