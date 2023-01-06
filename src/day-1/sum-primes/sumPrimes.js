function sumPrimes(num) {
  let i = 2;
  let sum = 0;
  while (i <= num) {
    if (checkPrime(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}

function checkPrime(n) {
  let i = 2;
  while (i <= n / 2) {
    if (n % i == 0) {
      return false;
    }
    i++;
  }
  return true;
}

export { sumPrimes };
