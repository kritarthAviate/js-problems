function abbreviateString(str) {
  if (typeof str !== "string") {
    throw new Error();
  }
  const strArr = str.split(" ");
  return `${strArr[0]} ${strArr[strArr.length - 1][0].toUpperCase()}.`;
}

export { abbreviateString };
