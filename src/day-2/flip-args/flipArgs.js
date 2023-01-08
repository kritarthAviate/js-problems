const flipArgs = (fn) => {
  return function reverseArgs(...args) {
    let argsArr = [];
    let i = 0;
    while (i < args.length) {
      argsArr.unshift(args[i]);
      i++;
    }
    return fn(argsArr);
  };
};

export { flipArgs };
