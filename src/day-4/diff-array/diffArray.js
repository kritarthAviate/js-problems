// This approach will rearrange the elements, thus won't qualify all the test cases

// function diffArray(firstArray, secondArray) {
//   const mergedSortedArray = [...firstArray, ...secondArray].sort();
//   let result = [];
//   let i = 0;
//   while (i < mergedSortedArray.length) {
//     if (
//       mergedSortedArray[i] != mergedSortedArray[i + 1] ||
//       i == mergedSortedArray.length - 1
//     ) {
//       result.push(mergedSortedArray[i]);
//       i++;
//     } else {
//       i += 2;
//     }
//   }
//   return result;
// }

function diffArray(firstArray, secondArray) {
  const result = [];
  const mergedArray = [...firstArray, ...secondArray];
  let i = 0;
  while (i < mergedArray.length) {
    if (
      firstArray.indexOf(mergedArray[i]) == -1 ||
      secondArray.indexOf(mergedArray[i]) == -1
    ) {
      result.push(mergedArray[i]);
    }
    i++;
  }
  return result;
}

export { diffArray };
