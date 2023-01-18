function leastCommonMultiple(num1, num2) {
  return (num1 * num2) / findGCD(num1, num2);
}

function findGCD(a, b) {
  if (a == b) return a;

  if (a > b) return findGCD(a - b, b);
  return findGCD(a, b - a);
}

export { leastCommonMultiple };
