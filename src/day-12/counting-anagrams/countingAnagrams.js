const countingAnagrams = (str) => {
  const anagrams = {};
  const strArr = str.split(" ");

  strArr.forEach((s) => {
    if (s.length > 1) {
      anagrams[getSortedStr(s)] = anagrams[getSortedStr(s)]
        ? anagrams[getSortedStr(s)] + 1
        : 1;
    }
  });

  return Object.values(anagrams).filter((num) => num > 1).length;
};

const getSortedStr = (str) => {
  return str.split("").sort().join("");
};

export { countingAnagrams };
