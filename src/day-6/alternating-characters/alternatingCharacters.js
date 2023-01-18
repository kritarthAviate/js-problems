function alternatingCharacters(arr) {
  return arr.map((str) => countRepeatedCharacters(str));
}

function countRepeatedCharacters(str) {
  if (str.length == 0) {
    return 0;
  }

  if (str[0] == str[1]) {
    return 1 + countRepeatedCharacters(str.slice(1));
  }

  return countRepeatedCharacters(str.slice(1));
}

// console.log(countRepeatedCharacters("AAAABBAAAA"));

export { alternatingCharacters };
