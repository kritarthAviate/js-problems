export const sumAll = (arr) => {
  let sortedArray = arr.sort((a, b) => a - b);
  return sumBtwTwoNumbers(sortedArray[1], sortedArray[0]);
};

function sumBtwTwoNumbers(x, y) {
  return ((x - y + 1) * (x + y)) / 2;
}
