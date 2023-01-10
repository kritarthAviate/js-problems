function addBigIntegers(intString) {
  const intArr = intString.split("\n");
  return intArr.reduce((acc, str) => addTwoIntegerStrings(acc, str));
}

function addTwoIntegerStrings(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const length = len1 > len2 ? len1 : len2;
  let x1,
    y1,
    rem,
    div = 0;
  let result = "";
  for (let i = 0; i < length; i++) {
    if (i >= len1) x1 = 0;
    else x1 = parseInt(str1[len1 - i - 1]);
    if (i >= len2) y1 = 0;
    else y1 = parseInt(str2[len2 - i - 1]);
    rem = (x1 + y1 + div) % 10;
    div = Math.floor((x1 + y1 + div) / 10);
    result = rem.toString() + result;
  }
  return result;
}

export { addBigIntegers };
