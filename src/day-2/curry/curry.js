function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// export { curry };

const add = curry((a, b, c) => {
  return a + b + c;
});
add(1)(2)(3);
