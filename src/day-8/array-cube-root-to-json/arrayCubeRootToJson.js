const arrayCubeRootToJson = (arr) => {
  if (typeof arr !== "object" || !arr.length) {
    throw "";
  }
  let result = {};
  arr.forEach((num) => {
    if (typeof +num != "number" || num == null || isNaN(num)) {
      throw "";
    }
    result[num] = Math.cbrt(num);
  });
  return result;
};

export { arrayCubeRootToJson };
