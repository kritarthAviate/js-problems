export const sumAll = (arr) => {
  let sortedArray = arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = sortedArray[0]; i <= sortedArray[1]; i++) {
    sum += i;
  }
  return sum;
};
