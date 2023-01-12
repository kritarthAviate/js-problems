function lastIndexOf(...args) {
  const itemToSearch = args[0];
  const array = args[1];

  return array.lastIndexOf(itemToSearch);
}

export { lastIndexOf };
