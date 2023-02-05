function bizarreStringIncrementer(str) {
  if (isNaN(str[str.length - 1])) {
    return str + "1";
  }
  let numberStr = "";
  let restOfStr = "";
  for (let i = str.length - 1; !isNaN(str[i]); i--) {
    numberStr = str[i] + numberStr;
    restOfStr = str.slice(0, i);
  }
  let num = +numberStr;
  const incrementedNumberStr = ++num;

  return (
    restOfStr + String(incrementedNumberStr).padStart(numberStr.length, "0")
  );
}

export { bizarreStringIncrementer };
