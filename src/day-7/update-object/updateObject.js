function updateObject(index, value, arr) {
  const newArr = arr;
  newArr.splice(index, 1, value);
  return newArr;
}

export { updateObject };
