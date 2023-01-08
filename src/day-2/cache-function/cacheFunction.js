function cacheFunction(cb) {
  let mapping = {};

  let func = (...args) => {
    if (args in mapping) {
      return mapping[args];
    }

    mapping[args] = cb(...args);
    return mapping[args];
  };
  return func;
}

export { cacheFunction };
