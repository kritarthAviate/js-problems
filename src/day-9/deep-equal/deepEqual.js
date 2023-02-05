function deepEqual(...args) {
  const obj1 = args[0];
  const obj2 = args[1];
  const options = args[2];

  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length == obj2Keys.length) {
    return obj1Keys.every((key) => obj2[key] === obj1[key]);
  }

  return false;
}

export { deepEqual };
