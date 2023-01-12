function updateInventory(...args) {
  const curInv = args[0];
  const newInv = args[1];
  const mergedInv = [...curInv, ...newInv];
  const map = {};
  mergedInv.forEach((item) => {
    if (item[1] in map) {
      map[item[1]] += item[0];
    } else {
      map[item[1]] = item[0];
    }
  });
  const resultArry = Object.keys(map)
    .sort()
    .map((item) => [map[item], item]);
  return resultArry;
}

export { updateInventory };
