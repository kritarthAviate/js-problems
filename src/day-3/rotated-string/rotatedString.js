const rotatedString = (str1, str2) => {
  if (str1 == str2) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    const reversed = str1.slice(i).concat(str1.slice(0, i));
    if (reversed === str2) {
      return true;
    }
  }
  return false;
};

export { rotatedString };
