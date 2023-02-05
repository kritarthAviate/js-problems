const freqSort = (array) => {
  const charCount = array.reduce((obj, char) => {
    if (char in obj) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
    return obj;
  }, {});

  return Object.keys(charCount).sort((a, b) => charCount[b] - charCount[a]);
};

// export { freqSort };

const result = freqSort(["a", "z", "z", "z", "b", "b", "z"]);
console.log({ result });
