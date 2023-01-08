function longestWordInString(sentence) {
  return sentence.split(" ").sort((a, b) => b.length - a.length)[0].length;
}

export { longestWordInString };
