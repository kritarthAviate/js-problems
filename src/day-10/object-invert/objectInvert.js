function objectInvert(obj) {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    newObj[obj[key]] = key;
  });

  return newObj;
}

export { objectInvert };
