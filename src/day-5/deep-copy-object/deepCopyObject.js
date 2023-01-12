const deepCopyObject = (objToCopy) => {
  if (objToCopy == null) return null;
  if (typeof objToCopy != "object") {
    return objToCopy;
  }
  const newObj = {};
  Object.keys(objToCopy).forEach((key) => {
    newObj[key] =
      typeof objToCopy[key] == "object"
        ? deepCopyObject(objToCopy[key])
        : objToCopy[key];
  });
  return newObj;
};

export { deepCopyObject };
