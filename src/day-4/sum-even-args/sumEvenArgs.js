const sumEvenArgs = (...args) => {
  return args
    .filter((element) => element % 2 == 0)
    .reduce((acc, element) => acc + element, 0);
};

export { sumEvenArgs };
