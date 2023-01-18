function aperture(n, list) {
  if (n > list.length) {
    return [];
  }
  let newArr = [];
  for (let i = 0; i < list.length - n + 1; i++) {
    newArr.push(list.slice(i, i + n));
  }
  return newArr;
}

export { aperture };
