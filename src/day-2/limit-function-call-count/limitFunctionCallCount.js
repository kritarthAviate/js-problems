const limitFunctionCallCount = (cb, count) => {
  let counter = 0;
  return function (...args) {
    counter++;
    if (counter > count) {
      return null;
    }
    return cb(...args);
  };
};

export { limitFunctionCallCount };
