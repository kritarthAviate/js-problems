const forEach = (fn, array) => {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
};

const map = (fn, array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = fn(array[i], i, array);
  }
  return newArray;
};

const filter = (fn, array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let callbackResult = fn(array[i], i, array);
    if (callbackResult == true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const reduce = (fn, array, initial) => {
  let previousValue = initial;
  let startIndex = 0;
  if (!initial) {
    previousValue = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    previousValue = fn(previousValue, array[i], i, array);
  }
  return previousValue;
};

export { forEach, map, filter, reduce };
// const array = [1, 2, 3, 4, 5];
// const addFunc = (acc, i) => acc + i;

// console.log(reduce(addFunc, array));
// console.log(array.reduce(addFunc));
