function rot13(code) {
  let decoded = "";
  for (let i = 0; i < code.length; i++) {
    let charCode = code.charCodeAt(i);
    if (charCode < 65 || charCode > 90) {
      decoded += code[i];
    } else {
      let newCharCode = charCode >= 78 ? charCode - 13 : charCode + 13;
      decoded += String.fromCharCode(newCharCode);
    }
  }
  return decoded;
}

export { rot13 };
