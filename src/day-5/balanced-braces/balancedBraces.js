function balancedBraces(string) {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (["{", "[", "("].includes(string[i])) {
      stack.push(string[i]);
      continue;
    }

    if (["}", "]", ")"].includes(string[i])) {
      if (stack.length == 0) {
        return false;
      }

      let check = stack.pop();

      if (string[i] == "}" && check != "{") {
        return false;
      }
      if (string[i] == "]" && check != "[") {
        return false;
      }
      if (string[i] == ")" && check != "(") {
        return false;
      }
    }
  }
  return stack.length == 0;
}

export { balancedBraces };
