const deepCopyObject = (objToCopy) => {
  if (typeof objToCopy != "object") {
    return objToCopy;
  }
  const newObj = { ...objToCopy };
  // Object.keys(objToCopy).forEach((key) => {
  //   newObj[key] = objToCopy[key];
  // });
  return newObj;
};

export { deepCopyObject };
