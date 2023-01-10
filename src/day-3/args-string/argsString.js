const argsString = (message, args) => {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] == "{" && message[i + 1] == "}") {
      result = result + args.shift();
      i++;
    } else {
      result += message[i];
    }
  }
  return result;
};

export { argsString };
