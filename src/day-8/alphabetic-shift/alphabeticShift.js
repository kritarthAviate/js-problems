function alphabeticShift(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    newString += String.fromCharCode(charCode + 1);
  }
  return newString;
}

export { alphabeticShift };
