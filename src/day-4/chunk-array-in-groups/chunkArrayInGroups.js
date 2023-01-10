function chunkArrayInGroups(array, chunkSize) {
  let newArray = [];
  let i = 0;
  while (i < array.length) {
    newArray.push(array.slice(i, i + chunkSize));
    i = i + chunkSize;
  }
  return newArray;
}

export { chunkArrayInGroups };
